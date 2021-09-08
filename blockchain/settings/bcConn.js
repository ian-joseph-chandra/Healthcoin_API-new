const Web3 = require('web3'),
    localUrl = 'http://127.0.0.1:8545',
    web3 = new Web3(localUrl),
    Tx = require('ethereumjs-tx').Transaction,
    sendParameter = '';
function convertToHex(data) {
    return web3.utils.toHex(data);
}

function convertToWei(value, unit) {
    return web3.utils.toWei(value, unit);
}

module.exports = {
    web3,
    Tx,
    convertToHex,
    convertToWei
}
