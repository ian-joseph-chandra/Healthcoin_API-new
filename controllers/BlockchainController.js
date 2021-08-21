const models = require('../models');

class BlockchainController {
    static async index() {
        return await models.Blockchain.findAll();
    }

    static async store() {
    }

    static async update() {
    }

    static async destroy() {
    }
}
