const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

const routes = require("express").Router();

//Busca por um usuario específico
routes.get("/user/:id", userController.getUser),

//Listar todos os usuarios
routes.get("/users", userController.getUsers);

//Criar usuario
routes.post("/user", userController.createUser);

//Atualizar usuario
routes.put("/user", userController.updateUser);

//Excluir usuario
routes.delete("/user/:id", userController.deleteUser);

routes.post("/product", productController.createProduct);


module.exports = routes;