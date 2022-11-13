const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
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
        created: {
            allowNull: false,
            type: DataTypes.DATE,
            unique: false
        },
        money: {
            allowNull: false,
            type: DataTypes.INTEGER,
            unique: false
        },
    });
};