const UserRole = require('../models').UserRole;

class UserRoleController {
    static async index() {
        return await UserRole.findAll();
    }

    static async store(name) {
        await UserRole.create({name})
    }

    static async update() {
    }

    static async destroy() {
    }
}
