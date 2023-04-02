const { generateManyRandomItems } = require('../../services/item/itemService')
const User = require('../../models/users.model')

const generateItemsForUser = async (user, nb) => {
    console.log(`generate ${nb} items for ${user}`);
    try {
        const users = await User.findAll({
            public_key: [user]
        });
        console.log(users.every(user => user instanceof User));
        console.log("All users:", JSON.stringify(users, null, 2));

        listItems = generateManyRandomItems(nb)
        await sequelize.authenticate();
        return { status: 201, message: "OK", payload: listItems }
    } catch (error) {
        console.log(error.message);
        return { status: 500, message: error.message }
    }
}


module.exports = { generateItemsForUser }
