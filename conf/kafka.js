// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")
const { healthcheck } = require("../controler/common/healthcheck")

const topic = "message-log"
const topicResponse = "message-log-res"

const clientIdApi = "treasure-inc-api"
const clientIdEngine = "treasure-inc-Engine"

const brokers = ["localhost:9093"]


const kafkaConsumer = new Kafka({ clientId: clientIdApi, brokers })
const kafkaProducer = new Kafka({ clientId: clientIdEngine, brokers })

const consumer = kafkaConsumer.consumer({ groupId: clientIdApi })
const producer = kafkaProducer.producer({})

const consume = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: ({ message }) => {
            try {
                const result = JSON.parse(message.value)
                console.log(`received message: ${result.replyId}, ${result.payload}`)
                produce(result.replyId, `${result.payload} ? never gonna give you up ${result.replyId}...`)
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