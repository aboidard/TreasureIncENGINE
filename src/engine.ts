//@ ts-check
require('dotenv').config()
const env = process.env

const { healthcheck } = require("./controlers/common/healthcheck")
const { generateItemsForUser } = require("./controlers/items/itemsControler")

import { consume } from "./conf/redis"
import { sequelizeConnection } from "./conf/sequelize"

const callbacks = Object.create(null);

try {
    sequelizeConnection.authenticate();
    console.log('sequelize connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

callbacks["healthcheck"] = async function (_: any) {
    return await healthcheck()
}

callbacks["generateItemsForUser"] = async function (params: any) {
    return await generateItemsForUser(params.user, params.nb)
}

// start the consumer, and log any errors
consume(callbacks).catch((err: any) => {
    console.error("error in consumer: ", err)
})
