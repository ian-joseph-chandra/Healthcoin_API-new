'use strict';

const Web3 = require('web3'),
    ropstenUrl = 'https://ropsten.infura.io/v3/92b7dc4c6204484b8bdd9fcb46aabcd3',
    web3 = new Web3(ropstenUrl),
    contractAddress = '0x365c244c1FAD3BAA25AFb2Fed9Ccb69286f807d6',
    abi = require('./abi').ropsten;

const contract = new web3.eth.Contract(abi, contractAddress);

async function getRoleName() {
    const role = await contract.methods.getRole(1).call()
    console.log("The Role with id: 1 is = " + role);
}

getRoleName();
