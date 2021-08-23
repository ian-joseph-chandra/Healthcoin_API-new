const Hospital = require('../models').Hospital;

class HospitalController {
    static async index() {
        return await Hospital.findAll();
    }

    static async store(blockchainId, name, address, email, phone) {
        await Hospital.create({
            blockchainId,
            name,
            address,
            email,
            phone
        })
    }

    static async update() {
    }

    static async destroy() {
    }
}
