const productService = require("../services/productServices");

const productController = {
    async createProduct(req, res){
        const { name, price, discPrice, qttInventory, cateId } = req.body;

        if (!name || !price || !discPrice || !qttInventory || !cateId){
            return res.status(400).json({
                error: 'Parametros incompletos'
            });
        }

        let product = await productService.createProduct(name, price, discPrice, qttInventory, cateId);

        if (!product){
            return res.status(400).json({
                error: 'Parametros invalidos'
            });
        }

        return res.json(product)
    },
}

module.exports = productController;