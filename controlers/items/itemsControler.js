const { generateManyRandomItems } = require('../../services/item/itemService')
const sequelize = require('../../conf/sequelize')

const generateItemsForUser = async (user, nb) => {
    console.log(`generate ${nb} items for ${user}`);
    try {
        const userDB = await sequelize.models.users.findOne({
            where: { public_key: [user] }
        });

        listItems = generateManyRandomItems(nb)
        listItems.forEach(item => {
            item.user_id = userDB.id
        })
        await sequelize.models.items.bulkCreate(listItems)

        return { status: 201, message: "OK", payload: { items: listItems } }
    } catch (error) {
        console.log(error.message);
        return { status: 500, message: error.message }
    }
}


module.exports = { generateItemsForUser }
