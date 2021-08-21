const models = require('../models');

class RecordUpdateController {
    static async index() {
        return await models.RecordUpdate.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}

RecordUpdateController.index().then(r => console.log(r))
