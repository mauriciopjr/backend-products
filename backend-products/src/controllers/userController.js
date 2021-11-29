const userService = require("../services/userService");

const userController = {
    async getUser(req, res) {
        const id = req.params.id;

        let user = await userService.getUser(id);

        if (!user){
            return res.status(404).json({
                error: 'Falaha no servidor ao fazer a busca'
            });
        }

        return res.json(user);
    },

    async getUsers(req, res) {
        let users = await userService.getUsers();

        if (users.length == 0){
            return res.status(404).json({
                error: "Nenhum usuário encontrado"
            });
        }

        return res.json(users);
    },

    async createUser(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        if (!username || !password){
            return res.status(400).json({
                error: 'Parametros incompletos'
            });
        }
        
        let user = await userService.createUser(username, password);

        if (!user){
            return res.status(400).json({
                error: 'Parametros invalidos'
            });
        }

        return res.json(user);
    },

    async updateUser(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        const newPassword = req.body.newPassword;

        let user = await userService.updateUser(username, password, newPassword);
        if(!user){
            return res.status(401).json({
                error: "Acesso negado",
            })
        }
        return res.json({
            message: "Usuario excluido"
        });
    },

    async deleteUser(req, res) {
        const id = req.params.id;

        let user = await userService.deleteUser(id);
        if(!user){
            return res.status(404).json({
                error: "Usuario nao encontrado",
            })
        }
        return res.json(user);
    },
}

module.exports = userController;