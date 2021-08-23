const Blockchain = require('../models').Blockchain;

class BlockchainController {
    static async index() {
        return await Blockchain.findAll();
    }

    static async store(address, balance) {
        await Blockchain.create({address, balance})
    }

    static async update() {
    }

    static async destroy() {
    }
}
