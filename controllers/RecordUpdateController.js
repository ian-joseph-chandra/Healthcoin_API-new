const RecordUpdate = require('../models').RecordUpdate;

class RecordUpdateController {
    static async index() {
        return await RecordUpdate.findAll();
    }

    static async store(oldRecordId, newRecordId) {
        await RecordUpdate.create({
            oldRecordId,
            newRecordId
        })
    }

    static async update() {
    }

    static async destroy() {
    }
}
