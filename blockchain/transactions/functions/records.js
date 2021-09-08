const owner = require('../../settings/ganache-accounts'),
    contract = owner.contract.methods,
    web3 = require('../../settings/bcConn').web3,
    transaction = require('./transactionController'),
    sha256 = require('js-sha256').sha256;

async function createHealthBook(senderIndex, patientAddress) {
    const data = contract.createHealthBook(patientAddress);
    return await transaction.setData(data, senderIndex);
}

async function insertRecord(senderIndex, patientAddress, doctorAddress, checkDate, hashValue, urlAPI) {
    const hashValues = await splitHashValue(hashValue);
    const data = contract.insertRecord(patientAddress, doctorAddress, checkDate, hashValues[0], hashValues[1], urlAPI);
    return await transactions.setData(data, senderIndex);
}

/**
 * Store the medical record into BC
 * @returns {Promise<void>}
 * @param data
 */
function store(data, accountAddress, accountAddress1, number, com, flu, heavyFluNeedToBedRest) {
    const date = new Date(),
        disease_name_hash = sha256(data.disease_name),
        diagnose_info_hash = sha256(data.diagnose_info);

    return contract.insertRecord(
        data.patient_eth_address,
        data.doctor_eth_address,
        date.getTime(),
        'abc',
        disease_name_hash,
        diagnose_info_hash).send({
        from: data.hospital_eth_address,
        gasLimit: web3.utils.toHex(2000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
    });
}

/**
 * Get the medical record data from BC
 * @param data The patient address & ID of the corresponding record
 * @returns {Promise<*>}
 */
async function show(data) {
    return await contract.getRecord(data.patientAddress, data.recordId).call();
}

async function updateRecord(senderIndex, patientAddress, doctorAddress, checkDate, hashValue, urlAPI, fromId) {
    const hashValues = splitHashValue(hashValue);
    const data = contract.updateRecord(patientAddress, doctorAddress, checkDate, hashValues[0], hashValues[1], urlAPI, fromId);
    return await transaction.setData(data, senderIndex);
}

function getLastRecordId(patientAddress) {
    return contract.getLastRecordId(patientAddress).call()
}

function splitHashValue(hashValue) {
    return [web3.utils.stringToHex(hashValue.slice(0, 32)), web3.utils.stringToHex(hashValue.slice(32, 64))];
}

module.exports = {
    createHealthBook,
    store,
    updateRecord,
    show,
    getLastRecordId
}
