// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

const topic = "message-log"
const topicResponse = "message-log-res"

const clientIdApi = "treasure-inc-api"
const clientIdEngine = "treasure-inc-Engine"

const brokers = ["localhost:9093"]
let callbacks = null;

const kafkaConsumer = new Kafka({ clientId: clientIdApi, brokers })
const kafkaProducer = new Kafka({ clientId: clientIdEngine, brokers })

const consumer = kafkaConsumer.consumer({ groupId: clientIdApi })
const producer = kafkaProducer.producer({})

const consume = async (cbacks) => {
    callbacks = cbacks
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: async ({ message }) => {
            try {
                const request = JSON.parse(message.value)
                console.log(`received message: ${request.replyId}, ${request.payload}`)
                let result = await callbacks[request.payload]()
                produce(request.replyId, result)
            } catch (err) {
                console.error(`could not read message ${err}`)
            }
        },
    })
}


const produce = async (replyId, message) => {
    await producer.connect()

    try {
        await producer.send({
            topic: topicResponse,
            messages: [
                {
                    value: JSON.stringify({ replyId: replyId, payload: message })
                },
            ],
        })
        console.log(`message sent to ${replyId}`)
    } catch (err) {
        console.error(`could not write message : ${err}`)
    }
}
module.exports = consume