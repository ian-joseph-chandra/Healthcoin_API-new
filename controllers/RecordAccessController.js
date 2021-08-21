const models = require('../models');

class RecordAccessController {
    static async index() {
        return await models.RecordAccess.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
