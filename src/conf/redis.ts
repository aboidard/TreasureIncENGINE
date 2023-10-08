const Redis = require('ioredis');

const topic = "message-log"
const topicResponse = "message-log-res"

const redisConf = {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
};
const consumer = new Redis(redisConf);
const producer = new Redis(redisConf);

export const consume = async (callbacks) => {
    consumer.on('message', async (channel, message) => {
        try {
            const request = JSON.parse(message)
            console.log(`received message: ${request.replyId}, ${request.payload}`)
            let result = await callbacks[request.payload.type](request.payload.params)
            produce(request.replyId, result)
        } catch (err) {
            console.error(`could not read message ${err}`)
        }
    });

    consumer.on("error", function (err) {
        console.log("Error " + err);
    });

    consumer.on("end", function () {
        console.log("Redis connection ended");
    });

    consumer.on("connect", function () {
        console.log("Redis connected");
    });

    consumer.on("reconnecting", function () {
        console.log("Redis reconnecting");
    });

    console.log("Subscribing to channel :", topic);

    consumer.subscribe(topic, (err, count) => {
        if (err) {
            // Just like other commands, subscribe() can fail for some reasons,
            // ex network issues.
            console.error("Failed to subscribe: %s", err.message);
        } else {
            // `count` represents the number of channels this client are currently subscribed to.
            console.log(
                `Subscribed successfully! This client is currently subscribed to ${count} channels.`
            );
        }
    });
}

export const produce = async (replyId: string, payload: any) => {
    try {
        producer.publish(topicResponse, JSON.stringify({ replyId: replyId, payload: payload }))
        console.log(`message sent to ${replyId}`)
    } catch (err) {
        console.error(`could not write message : ${err}`)
    }
}

