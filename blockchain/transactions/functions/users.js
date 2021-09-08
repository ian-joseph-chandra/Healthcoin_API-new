const owner = require('../../settings/ganache-accounts'),
    contract = owner.contract.methods,
    web3 = require('../../settings/bcConn').web3,
    transaction = require('./transactionController');

async function getRole(roleId) {
    return await contract.getRole(roleId).call();
}

async function setRole(senderIndex, roleName) {
    const data = contract.setRole(roleName);
    return await transaction.setData(data, senderIndex);
}

async function getUser(userAddress) {
    return await contract.getUser(userAddress).call();
}

async function storeUser(hospitalAddress, userAddress, roleId, name, nationalId) {
    return await contract.insertUser(userAddress, roleId, name, nationalId).send({
        from: hospitalAddress
    });
}

async function updateUser(senderIndex, roleId, name, nationalId) {
    const data = contract.updateUser(roleId, name, nationalId);
    return await transaction.setData(data, senderIndex);
}

async function getHospital(userAddress) {
    return await contract.getHospital(userAddress).call();
}

async function setHospital(contractOwnerAddress, hospitalAddress, hospitalName, hospitalCode) {
    return await contract.setHospital(hospitalAddress, hospitalName, hospitalCode)
        .send({
            from: contractOwnerAddress,
            gasLimit: web3.utils.toHex(200000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
        });
}

module.exports = {
    getRole,
    setRole,
    getUser,
    storeUser,
    updateUser,
    getHospital,
    setHospital
}
