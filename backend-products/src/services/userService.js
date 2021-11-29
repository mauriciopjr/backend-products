const db = require("../../database/models");
const userModel = db.User;

const userService = {
    async getUser(id){
        try {
            let user = await userModel.findOne({
                where: {
                    id
                }
            });
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    },
    async getUsers(){
        try {
            let user = await userModel.findAll();
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    },
    async createUser(username, password){
        try {
            let user = await userModel.create({
                username: username,
                password: password,
            });
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    },
    async updateUser(username, password, newPassword){
        try {
            let userExist = await userModel.findOne({
                where: {
                    username,
                    password,
                }
            });

            if (!userExist){
                console.log("Usuario nao existe");
                return null;
            }

            userExist.password = newPassword;

            await userExist.save();

            return userExist;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },
    async deleteUser(){
        try {
            let user = await userModel.destroy({
                where: {
                    id: id,
                }
            });
            return user;
        } catch (error) {
            console.error(error);
            return undefined;
        }
        
    }
} 

module.exports = userService;