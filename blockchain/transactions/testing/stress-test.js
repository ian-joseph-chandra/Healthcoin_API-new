const owner = require('../../settings/ganache-accounts'),
    web3 = require('../../settings/bcConn').web3,
    Tx = require('../../settings/bcConn').Tx,
    contract = owner.contract.methods,
    {exec} = require('child_process'),
    diagnoseSample = require('./data-sample').small;

let indexTotalTx = 0;

const limitTransaction = 1,
    date = new Date(),
    fs = require('fs'),
    resultPath = `./result/${limitTransaction}-transactions`;

// hashRecord = crypto.SHA256('{disease: flu}').toString(),
//     hashValues = splitHashValue(hashRecord);
//
// function splitHashValue(hashValue) {
//     return [transactions.utils.stringToHex(hashValue.slice(0, 32)), transactions.utils.stringToHex(hashValue.slice(32, 64))];
// }

async function sendData(indexTx, data, accountAddress, privateKey, senderIndex, testNumber) {
    const startFilePath = resultPath + '\\' + testNumber + '\\start' + '\\' + senderIndex + '.csv';
    const stopFilePath = resultPath + '\\' + testNumber + '\\stop' + '\\' + senderIndex + '.csv';

    await web3.eth.getTransactionCount(accountAddress, (err, txCount) => {
        const txObject = {
            nonce: convertToHex(txCount),
            to: owner.contractAddress,
            value: convertToHex(convertToWei('0', 'ether')),
            gasLimit: convertToHex(5000000),
            gasPrice: convertToHex(convertToWei('10', 'gwei')),
            data: data
        }

        const tx = new Tx(txObject);
        tx.sign(Buffer.from(privateKey, 'hex'));

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        const start = new Date();

        web3.eth.sendSignedTransaction(raw)
            .on('receipt', async function () {
                const stop = new Date();

                fs.appendFile(startFilePath, ';' + start.getTime(), () => {
                })
                fs.appendFile(stopFilePath, ';' + stop.getTime(), () => {
                })

                indexTx++;
                indexTotalTx++;
                if (indexTx < limitTransaction)
                    await sendData(indexTx, data, accountAddress, privateKey, senderIndex, testNumber);

                if ((limitTransaction > 1) && (indexTotalTx % limitTransaction === 0))
                    console.log(`- Finished ${indexTotalTx / limitTransaction}-transactions`)

                if (indexTotalTx === limitTransaction * 10) {

                    console.log("Creating Summary...")
                    fs.writeFile('./run-status.txt', (0).toString(), () => {
                    })

                    await createSummaryResult(testNumber);
                    exec('python ./elapse-summary.py');
                    setTimeout(function () {
                        exec('python ./combine-elapse-cpu.py');
                    }, 3000);
                }
            })
            .on('error', console.error)
    })
}

async function runStressTest() {
    getTestNumber();
}

function getTestNumber() {
    const testNumberPath = resultPath + '/test-number.txt';

    fs.readFile(testNumberPath, 'utf-8', async (err, testNumber) => {
        fs.writeFile('./result/test-info.txt', `${limitTransaction},${testNumber}`, () => {
        })
        fs.writeFile(testNumberPath, (parseInt(testNumber) + 1).toString(), () => {
        })
        await createTestFiles(testNumber)

        setTimeout(async function () {
            await prepareData(testNumber)
        }, 2500);
    })
}

async function prepareData(testNumber) {
    // address 12 = patient, address 11 = doctor
    const data = contract.insertRecord(
        owner.accountAddresses[12],
        owner.accountAddresses[11],
        date.getTime(),
        'abc',
        'flu',
        diagnoseSample).encodeABI();

    console.log("Start the transactions...")

    // address 0-9 = hospitals
    try {
        await sendData(0, data, owner.accountAddresses[0], owner.privateKeys[0], 0, testNumber);
        await sendData(0, data, owner.accountAddresses[1], owner.privateKeys[1], 1, testNumber);
        await sendData(0, data, owner.accountAddresses[2], owner.privateKeys[2], 2, testNumber);
        await sendData(0, data, owner.accountAddresses[3], owner.privateKeys[3], 3, testNumber);
        await sendData(0, data, owner.accountAddresses[4], owner.privateKeys[4], 4, testNumber);
        await sendData(0, data, owner.accountAddresses[5], owner.privateKeys[5], 5, testNumber);
        await sendData(0, data, owner.accountAddresses[6], owner.privateKeys[6], 6, testNumber);
        await sendData(0, data, owner.accountAddresses[7], owner.privateKeys[7], 7, testNumber);
        await sendData(0, data, owner.accountAddresses[8], owner.privateKeys[8], 8, testNumber);
        await sendData(0, data, owner.accountAddresses[9], owner.privateKeys[9], 9, testNumber);
    } catch (e) {
    }
}

async function createTestFiles(testNumber) {
    let folderPath = `${resultPath}/${testNumber}`
    const folderNames = ['start', 'stop']
    fs.mkdir(folderPath, () => {
    })

    for (let i = 0; i < 2; i++) {
        fs.mkdir(folderPath + '\\' + folderNames[i], () => {
        });

        for (let j = 0; j < 10; j++) {
            fs.appendFile(folderPath + '\\' + folderNames[i] + '\\' + j + '.csv', 'address-' + j, () => {
            });
        }
    }

    let summaryHeader = 'address-number';
    for (let i = 0; i < limitTransaction; i++)
        summaryHeader += `;tx-${i + 1}`

    fs.appendFile(folderPath + '\\start-summary.csv', summaryHeader, () => {
    });

    fs.appendFile(folderPath + '\\stop-summary.csv', summaryHeader, () => {
    });

    fs.writeFile('./run-status.txt', (1).toString(), () => {
        exec('python ./resource-monitor.py');
    })
}

function convertToHex(data) {
    return web3.utils.toHex(data);
}

function convertToWei(value, unit) {
    return web3.utils.toWei(value, unit);
}

async function createSummaryResult(testNumber) {
    createSummary('start', testNumber, 0)
    createSummary('stop', testNumber, 0)
}

function createSummary(fileName, testNumber, clientNumber) {
    if (clientNumber < 10) {
        const csvFilepath = `${resultPath}/${testNumber}/${fileName}/${clientNumber}.csv`
        const summaryFilePath = `${resultPath}/${testNumber}/${fileName}-summary.csv`

        fs.readFile(csvFilepath, 'utf-8', async (err, data) => {
            if (data.charAt(0) !== 'a') {
                fs.appendFile(summaryFilePath, `\naddress-${clientNumber}${data}`, () => {
                });
            } else {
                fs.appendFile(summaryFilePath, '\n' + data, () => {
                });
            }

            clientNumber++;
            createSummary(fileName, testNumber, clientNumber);
        })
    }
}

runStressTest();
