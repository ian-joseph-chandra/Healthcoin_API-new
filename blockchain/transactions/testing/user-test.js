const userAPI = require('../functions/users'),
    owner = require('../../settings/ganache-accounts'),
    web3 = require('../../settings/bcConn').web3,
    multiTransaction = require('./multiTransactionController'),
    contract = owner.contract.methods;

const siloamHospitalCode = web3.utils.stringToHex('3171789S'),
    husadaHospitalCode = web3.utils.stringToHex('3173040'),
    pluitHospitalCode = web3.utils.stringToHex('3175341'),
    gadingPluitHospitalCode = web3.utils.stringToHex('3175407'),
    manuelaHospitalCode = web3.utils.stringToHex('3174405'),
    pertaminaHospitalCode = web3.utils.stringToHex('3173474'),
    tarakanHospitalCode = web3.utils.stringToHex('3173521'),
    pikHospitalCode = web3.utils.stringToHex('3175352'),
    sumberWarasHospitalCode = web3.utils.stringToHex('3174015'),
    jakartaHospitalCode = web3.utils.stringToHex('3171045');

async function insertTestData() {
    await setHospitals();
    await insertUsers();

    /*Update User*/
    // await userAPI.updateUser(2, 2, 'Dr.Ian', 1234567890123456).then(r => console.log(r))
}

async function getTestData() {
    await userAPI.getHospital(owner.accountAddresses[0]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[1]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[2]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[3]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[4]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[5]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[6]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[7]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[8]).then(r => console.log(r));
    await userAPI.getHospital(owner.accountAddresses[9]).then(r => console.log(r));
    await userAPI.getUser(owner.accountAddresses[11]).then(r => console.log(r));
    await userAPI.getUser(owner.accountAddresses[12]).then(r => console.log(r));
}

async function setHospitals() {
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[0], 'SILOAM HOSPITALS', siloamHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[1], 'RS Husada', husadaHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[2], 'RS Pluit', pluitHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[3], 'RS Gading Pluit', gadingPluitHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[4], 'RS Manuela', manuelaHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[5], 'RS Pertamina Jaya', pertaminaHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[6], 'RSU Tarakan', tarakanHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[7], 'RS Pantai Indah Kapuk', pikHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[8], 'RS Sumber Waras', sumberWarasHospitalCode);
    await userAPI.setHospital(owner.accountAddresses[14], owner.accountAddresses[9], 'RS Jakarta', jakartaHospitalCode);
}

async function insertUsers() {
    // Insert Doctor
    await userAPI.storeUser(owner.accountAddresses[0], owner.accountAddresses[11], 2, 'Chandra', 1234567890123456);

    // Insert Patient
    await userAPI.storeUser(owner.accountAddresses[0], owner.accountAddresses[12], 1, 'Ian Joseph', 1234567890123455);
}

async function runTest() {
    // await insertTestData();
    await getTestData();
    // await insertUsers();
}

runTest()
