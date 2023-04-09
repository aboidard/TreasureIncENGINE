const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        public_key: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                is: /\d{11}/
            }
        },
        private_key: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: false,
            validate: {
                is: /\w{30}/
            }
        },
        money: {
            allowNull: false,
            type: DataTypes.INTEGER,
            unique: false
        },
    });
};