
import { Item } from "../../models/Item";
import { User } from "../../models/User";
import * as ItemService from "../../services/item/itemService";

export const generateItemsForUser = async (user: string, nb: number) => {
    console.log(`generate ${nb} items for ${user}`);
    try {
        const userDB = await User.findOne({
            where: { public_key: [user] }
        });

        if (userDB === null) {
            return { status: 404, message: "User not found" };
        }

        let listItems: Array<Item> = ItemService.generateManyRandomItems(nb);
        listItems.forEach((item: Item) => {
            item.user_id = userDB.id;
            item.save();
        })

        return { status: 201, message: "OK", payload: { items: listItems } };
    } catch (error: any) {
        console.log(error.message);
        return { status: 500, message: error.message };
    }
}
