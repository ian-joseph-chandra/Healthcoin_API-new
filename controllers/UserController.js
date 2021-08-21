const models = require('../models');

class UserController {
    static async index() {
        return await models.User.findAll({
            include: ['role']
        });
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
