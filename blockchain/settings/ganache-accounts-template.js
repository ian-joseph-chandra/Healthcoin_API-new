/**
 * This is a template file for the ganache-accounts. Please copy this file and name it "ganache-accounts.js"
 */

const conn = require('./bcConn'),
    web3 = conn.web3;

const crypto = require('crypto-js'),
    encryptedPass = web3.utils.stringToHex(crypto.MD5('healthcoin').toString()),
    newPass = web3.utils.stringToHex(crypto.MD5('ian2204').toString());

// Use the latest account to deploy the smart contract
const privateKeys = [
        '9b51784ca234942bcd2cb5f3208ecb7b434a2f9ac964f067eb56efb8f064a1a8',
        '0b0e909b810c6feb5fcd9b392ed07709cc9203097e58ce4a4370d50266d5ff7f',
        '56bd80cd0ee833021de33079c93c3d185fff324431dbf99153d5e3a64726132c',
        '03cd8e0c503df41713446581dd36687917c4dd2820d8cb595c1d40329025afbb',
        'ac40df877217343a93e937e399ad95812fa5e792c84a333be9ecac7d93b1e189',
        '834b3be7a262fa8a1f405f671447d5a6f6bd3c12e0df40166345bda666eb651c',
        'c37594f855e9d10625b8af208b17d7f1f8d24a33ad41de9c37999b03840d03c3',
        'e8da15fa94b4fd789f73641ecb2415d9b4efab7969e58be373f9846b8f2ed6e5',
        '5483dac2dc8086fb1de0e6d238afa4bea71e36156ce3c549825ca19102705eba',
        '32a7c08814725a11d73a2ee2ce759deef162715bbc576b240387396e980a8c4f',
        '15ca3cfc893f33f5d7429847d2b73a5183e2246f5794a58e9154d8793dddc203',
        '88ec0bbc360677965010bbf08ed8354426dfc4f376224ced3a684e6f3d41b594',
        '9e20dfaefa79ec21e6f45f73d2860cd4021ba83790e5b6e2ae6d61f41b64c75f',
        '63456d11a80a8bfb9e625bb440dacb22facd68b5a60f6dd64dd8288856f42ad8',
        '12cc35cbeac6a0bec493b560411e334794c0769e2ef0e1945d158baef028624e'],
    hexPrivateKeys = createHexPrivateKeyArray(privateKeys),
    accountAddresses = createAddressArray(privateKeys);

const abi = require('./abi').ganache,
    // Put the contract address here
    contractAddress = '0x0D1ad5f21eB7b12670c1E4181389d2539504e3de',
    contract = new web3.eth.Contract(abi, contractAddress);

function createHexPrivateKeyArray(privateKeyArray) {
    let temp = [];

    privateKeyArray.forEach(function (value) {
        temp.push('0x' + value);
    })

    return temp;
}

function createAddressArray(privateKeyArray) {
    let temp = [];

    privateKeyArray.forEach(function (value) {
        temp.push(web3.eth.accounts.privateKeyToAccount(value).address);
    })

    return temp;
}

module.exports = {
    accountAddresses,
    contractAddress,
    contract,
    encryptedPass,
    hexPrivateKeys,
    newPass,
    privateKeys
}
