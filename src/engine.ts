//@ ts-check
require('dotenv').config()
const env = process.env

const { consume } = require("./conf/redis")
const { sequelizeConnection } = require("./conf/sequelize")
const { healthcheck } = require("./controlers/common/healthcheck")
const { generateItemsForUser } = require("./controlers/items/itemsControler")
const { login, createUser, getAllUsers } = require("./controlers/users/userControler")

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

callbacks["login"] = async function (params: any) {
    return await login(params.user, params.private_key)
}

callbacks["createUser"] = async function (_: any) {
    return await createUser()
}

callbacks["getAllUsers"] = async function (_: any) {
    return await getAllUsers()
}

// start the consumer, and log any errors
consume(callbacks).catch((err: any) => {
    console.error("error in consumer: ", err)
})
