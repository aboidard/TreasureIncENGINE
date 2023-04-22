
import { sequelize } from "../../conf/sequelize/index";

export const healthcheck = async () => {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
        return { status: 200, message: "OK" }
    } catch (error: any) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        return { status: 500, message: error }
    }
}
