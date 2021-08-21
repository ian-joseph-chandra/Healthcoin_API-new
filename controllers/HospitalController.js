const models = require('../models');

class HospitalController {
    static async index() {
        return await models.Hospital.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
