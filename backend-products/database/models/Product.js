'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.belongsTo(models.Categorie, {
                foreignKey: 'cateId',
                targetKey: 'id'
            })
        }
    };
    Product.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        discPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        qttInventory: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        cateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Product',
        tableName: 'products'
    });
    return Product;
};