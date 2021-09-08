const recordAPI = require('../functions/records'),
    owner = require('../../settings/ganache-accounts'),
    web3 = require('../../settings/bcConn').web3,
    crypto = require('crypto-js');

const hashRecord = crypto.SHA256('{disease: flu}').toString(),
    updateRecord = crypto.SHA256('{disease: headache}').toString();

const date = new Date();

async function storeHealthBook() {
    await recordAPI.createHealthBook(0, owner.accountAddresses[12]);
}

async function storeRecord() {
    console.log(await recordAPI.getLastRecordId(owner.accountAddresses[12]));

    const receipt = await recordAPI.store(
        owner.accountAddresses[0], //Hospital Address
        owner.accountAddresses[12], //Patient Address
        owner.accountAddresses[11], //Doctor Address
        123456789,
        'https://abc.com',
        'flu',
        'Heavy flu, need to bed rest!');

    console.log('Txhash:', receipt.transactionHash);
}

async function getTestData() {
    // await recordAPI.getLastRecordId(owner.accountAddresses[12]).then(r => console.log(r));
    // await recordAPI.show(owner.accountAddresses[12], 1).then(r => console.log(r));

    const receipt = await web3.eth.getTransaction('0xe75f1f855e698914314762dee1a61d7cc042975a2516c97f3c0f15c9f2fd244a');
    // const decoded = await web3.utils.hexToString(receipt.input);

    console.log(receipt);
    console.log(decoded)
    // await web3.utils.toAscii()
    // await recordAPI.getRecord(owner.accountAddresses[3], 2).then(r => console.log(r));
}

async function runTest() {
    // await storeHealthBook();
    // await storeRecord();
    await getTestData();
    // console.log(await web3.eth.getTransaction('0x8abd702e80206cab4a1c37bf11b258be2ccf41072345dc4f93480596c62d2c7d'))
}

runTest()
