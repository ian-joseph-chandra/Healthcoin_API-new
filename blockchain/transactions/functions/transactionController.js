const conn = require('../../settings/bcConn'),
    web3 = conn.web3,
    Tx = conn.Tx,
    owner = require('../../settings/ganache-accounts');

async function sendData(data, accountAddress, privateKey) {
    await web3.eth.getTransactionCount(accountAddress, async (err, txCount) => {
        const txObject = {
            nonce: convertToHex(txCount),
            to: owner.contractAddress,
            value: convertToHex(convertToWei('0', 'ether')),
            gasLimit: convertToHex(200000),
            gasPrice: convertToHex(convertToWei('6', 'gwei')),
            data: data.encodeABI()
        }

        // Signed the data with private key.
        const tx = new Tx(txObject);
        tx.sign(Buffer.from(privateKey, 'hex'));

        // Serialized the object that will be sent into Ethereum.
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        // Send the signed transactions into Ethereum.
        await web3.eth.sendSignedTransaction(raw)
            .on('receipt', function (receipt) {
                console.log(receipt);
                //test.stressTest();
            }).on('error', console.error)
    })
}

async function setData(data, senderIndex) {
    await sendData(data, owner.accountAddresses[senderIndex], owner.privateKeys[senderIndex]);
}

function convertToHex(data) {
    return web3.utils.toHex(data);
}

function convertToWei(value, unit) {
    return web3.utils.toWei(value, unit);
}

module.exports = {
    setData
}
