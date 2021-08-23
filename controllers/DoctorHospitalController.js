const DoctorHospital = require('../models').DoctorHospital;

class DoctorHospitalController {
    static async index() {
        return await DoctorHospital.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
