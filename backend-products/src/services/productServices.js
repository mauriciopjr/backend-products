const db = require("../../database/models");
const productModel = db.Product;

const productService = {
    async createProduct(name, price, discPrice, qttInventory, cateId){
        try {
            let product = await productModel.create({
                name, price, discPrice, qttInventory, cateId
            });
            return product;
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    },

    async getProducts(){
        try {
            let products = productModel.findAll({
                include: db.Categorie
            });
            return products;
        } catch (error) {
            console.error(error);
            return undefined;
            
        }
    }
}

module.exports = productService;