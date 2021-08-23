const User = require('../models').User;

class UserController {
    static async index() {
        return await User.findAll({include: ['role']});
    }

    static async store(roleId, blockchainId, name, birthDate, email, phone, address, pass, nationalId) {
        await User.create({
            roleId,
            blockchainId,
            name,
            birthDate,
            email,
            phone,
            address,
            pass,
            nationalId
        })
    }

    static async update() {
    }

    static async destroy() {
    }
}
