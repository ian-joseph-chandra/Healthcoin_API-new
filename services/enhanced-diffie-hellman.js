const crypto = require('crypto'),
    CryptoJS = require('crypto-js'),
    axios = require('axios'),
    wallet = require('./wallet');

//-------------------------------------------------------------------------------------------
// Diffie-Hellman Key Exchange Simulation with Static Private Key
//-------------------------------------------------------------------------------------------

// Generate the Patient's Diffie-Hellman instances with 1024-bit length prime
const patient = crypto.createDiffieHellman(1024);
patient.setPrivateKey(wallet.alicePrivateKey)
patient.generateKeys();

// FUTURE SIMULATION SCHEMA:
// 1. Convert the value of patient.getPrime(), patient.getGenerator(), & patient.getPublicKey() to be QR-code
// 2. Scan the Patient's QR-code & decode the value of the patient.getPrime() & patient.getGenerator values

// Generate the Doctor's Diffie-Hellman instance with Patient's prime & primitive root values
const doctor = crypto.createDiffieHellman(patient.getPrime(), patient.getGenerator());
doctor.setPrivateKey(wallet.bobPrivateKey);
doctor.generateKeys();

// Patient's secret key will be the same with Doctor's secret key
const patientSecret = patient.computeSecret(doctor.getPublicKey(), null, 'hex'),
    doctorSecret = doctor.computeSecret(patient.getPublicKey(), null, 'hex');

//-------------------------------------------------------------------------------------------
// Secret Key-chain Generation Functions
//-------------------------------------------------------------------------------------------

function generateBranchKey(rootKey, timestamp) {
    return CryptoJS.SHA512(rootKey + timestamp).toString();
}

function generateChildKey(secretKey) {
    return CryptoJS.SHA512(secretKey).toString();
}

//-------------------------------------------------------------------------------------------
// Cipher Generation Simulation
//-------------------------------------------------------------------------------------------

// Create a cipher of disease ID & diagnostic detail data
const diseaseIdCipher = CryptoJS.AES.encrypt("1", doctorSecret),
    diagnosticDetailCipher = CryptoJS.AES.encrypt("Catch a flu, get some medicine now!", doctorSecret);

//-------------------------------------------------------------------------------------------
// Sending Record simulation
//-------------------------------------------------------------------------------------------
async function insertRecord(data) {
    await axios({
        method: 'POST',
        url: 'http://localhost:3000/records',
        data
    });
}

//-------------------------------------------------------------------------------------------
// Get & Decrypt Record simulation
//-------------------------------------------------------------------------------------------
async function getLatestRecord() {
    return axios.get('http://localhost:3000/records_latest/')
}

async function decryptRecord(data) {
    data.disease_id = wallet.hexToString(CryptoJS.AES.decrypt(data.disease_id, patientSecret))
    data.diagnostic_detail = wallet.hexToString(CryptoJS.AES.decrypt(data.diagnostic_detail, patientSecret))
}

//-------------------------------------------------------------------------------------------
// Start the simulation
//-------------------------------------------------------------------------------------------
/*
const startSimulation = async function () {
    const data = {
        patient_id: 2,
        doctor_id: 1,
        hospital_code: "3175000011",
        disease_id: diseaseIdCipher.toString(),
        diagnostic_detail: diagnosticDetailCipher.toString()
    }

    await insertRecord(data)

    console.log("Send: ")
    console.log(data)

    const response = await getLatestRecord(),
        responseData = await response.data;

    await decryptRecord(responseData);

    console.log("Retrieve: ")
    console.log(responseData)
}

startSimulation().then(() => console.log("\nSimulation Finished!"))
*/


const keyChainSimulation = async function () {
    let keyChain = [];
    let timestamps = [];
    const index = [2, 3];

    console.log('Root Secret Key:')
    console.log(doctorSecret, '\n')

    // Generate 3 Branch Keys
    for (let i = 0; i < index[0] + 1; i++) {
        timestamps.push(Date.now().toString())
        keyChain.push([generateBranchKey(doctorSecret, timestamps[i])])
    }

    // Generate 4 Child Keys for each branch
    for (let i = 0; i < index[1]; i++) {
        keyChain[0].push(generateChildKey(keyChain[0][i]))
        keyChain[1].push(generateChildKey(keyChain[1][i]))
        keyChain[2].push(generateChildKey(keyChain[2][i]))
    }

    console.log('\nKeys:')
    console.log(keyChain)

    // Get the key by index
    let childKey = generateBranchKey(doctorSecret, timestamps[index[0]]);
    for (let i = 0; i < index[1]; i++) {
        childKey = generateChildKey(childKey)

        if (i === index[1] - 1) {
            console.log('\nKey[3,4]:')
            console.log(childKey)
        }
    }
}

keyChainSimulation().then(() => '\nSimulation Finished!');
