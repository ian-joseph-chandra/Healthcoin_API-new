const models = require('../models');

class DoctorHospitalController {
    static async index() {
        return await models.DoctorHospital.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
