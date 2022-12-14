//@ ts-check
require('dotenv').config()
let env = process.env

const { healthcheck } = require("./controlers/common/healthcheck")

const consume = require('./conf/kafka')
const sequelize = require('./conf/sequelize')

const callbacks = Object.create(null);

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

callbacks["healthcheck"] = async function () {
    return await healthcheck()
}

// start the consumer, and log any errors
consume(callbacks).catch((err) => {
    console.error("error in consumer: ", err)
})
