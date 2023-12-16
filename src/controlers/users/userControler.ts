import { generatePrivateKey, generatePublicKey } from "../../tools/random";
import { User } from "../../models/User";

export const login = async (user: string, private_key: string) => {
    console.log(`login user ${user}`);
    try {
        const userDB = await User.findOne({
            where: { public_key: [user], private_key: [private_key] }
        });

        if (userDB === null) {
            return { status: 404, message: "User not found" };
        }

        userDB.lastLogin = new Date();
        await userDB.save();

        //return all data execpt private_key
        userDB.private_key = "";

        return { status: 200, message: "OK", payload: { user: userDB } };
    } catch (error: any) {
        console.log(error.message);
        return { status: 500, message: error.message };
    }
}

export const createUser = async () => {
    console.log(`create user`);
    try {
        const publicKey = generatePublicKey(11);
        const privateKey = generatePrivateKey(30);
        const userDB = await User.create({
            public_key: publicKey,
            private_key: privateKey,
            lastLogin: new Date(),
            money: 100000
        }, { isNewRecord: true });
        return { status: 201, message: "OK", payload: { user: userDB } };
    } catch (error: any) {
        console.log(error.message);
        return { status: 500, message: error.message };
    }
}

export const getAllUsers = async () => {
    console.log(`get all users`);
    try {
        const users = await User.findAll();
        users.forEach(element => {
            element.private_key = "";
        });
        return { status: 200, message: "OK", payload: { usersList: users } };
    } catch (error: any) {
        console.log(error.message);
        return { status: 500, message: error.message };
    }
}