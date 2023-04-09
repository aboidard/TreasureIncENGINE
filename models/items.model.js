const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('items', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        price: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        rarity: {
            allowNull: false,
            type: DataTypes.STRING
        },
        graphics: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });
};