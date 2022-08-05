const UserModel = require("../modal/user-modal")

class UserService {
    async getUser(filter){
        const user = await UserModel.findOne(filter)
        return user
    }
    async createUser(data){
        const user = await UserModel.create(data)
        return user
    }
}

module.exports = new UserService()