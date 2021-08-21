const models = require('../models');

class RecordController {
    static async index() {
        return await models.Record.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}

RecordController.index().then(r => console.log(r))
