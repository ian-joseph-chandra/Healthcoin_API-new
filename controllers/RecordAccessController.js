const RecordAccess = require('../models').RecordAccess;

class RecordAccessController {
    static async index() {
        return await RecordAccess.findAll();
    }

    static async store(patientId, token) {
        await RecordAccess.create({
            patientId,
            token
        })
    }

    static async update() {
    }

    static async destroy() {
    }
}
