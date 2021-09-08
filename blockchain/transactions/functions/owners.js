const owner = require('../../settings/ganache-accounts'),
    contract = owner.contract.methods,
    transaction = require('./transactionController');

async function getContractOwner() {
    return await contract.getOwner().call();
}

async function getContractPass(pass) {
    return await contract.getPass(pass).call();
}

async function setContractPass(oldPass, newPass){
    const data = contract.setPass(oldPass, newPass);
    return await transaction.setData(data, 0);
}

module.exports = {
    getContractOwner,
    getContractPass,
    setContractPass
}
