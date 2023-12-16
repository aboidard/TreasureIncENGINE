import { Sequelize } from 'sequelize-typescript';

const sequelizeConnection = new Sequelize(process.env.PGDATABASE!, process.env.PGUSER!, process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    models: [__dirname + '/../../models'],
    define: {
        createdAt: 'createdat',
        updatedAt: 'updatedat'
     },
});

export { Sequelize, sequelizeConnection };
