const Record = require('../models').Record;

class RecordController {
    static async index() {
        return await Record.findAll();
    }

    static async store(
        patient_id,
        doctor_id,
        hospital_id,
        disease_name,
        diagnose
    ) {
        await Record.create(
            patient_id,
            doctor_id,
            hospital_id,
            disease_name,
            diagnose
        )
    }

    static async update() {
    }

    static async destroy() {
    }
}
