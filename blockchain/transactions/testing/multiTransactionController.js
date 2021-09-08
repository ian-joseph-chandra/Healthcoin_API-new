const conn = require('../../settings/bcConn'),
    web3 = conn.web3,
    Tx = conn.Tx,
    owner = require('../../settings/ganache-accounts');

async function sendData(indexTx, limitTx, data, accountAddress, privateKey) {
    await web3.eth.getTransactionCount(accountAddress, (err, txCount) => {
        const txObject = {
            nonce: convertToHex(txCount),
            to: owner.contractAddress,
            value: convertToHex(convertToWei('0', 'ether')),
            gasLimit: convertToHex(200000),
            gasPrice: convertToHex(convertToWei('6', 'gwei')),
            data: data[indexTx].encodeABI()
        }

        const tx = new Tx(txObject);
        tx.sign(Buffer.from(privateKey, 'hex'));

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        web3.eth.sendSignedTransaction(raw)
            .on('receipt', function (receipt) {
                console.log(receipt);
                console.log(indexTx);
                indexTx++;
                if (indexTx < limitTx)
                    sendData(indexTx, limitTx, data, accountAddress, privateKey);
            })
            .on('error', console.error)
    })
}

function convertToHex(data) {
    return web3.utils.toHex(data);
}

function convertToWei(value, unit) {
    return web3.utils.toWei(value, unit);
}

module.exports = {
    sendData
}
