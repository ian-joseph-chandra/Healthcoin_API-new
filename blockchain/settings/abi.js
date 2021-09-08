'use strict'

const ropsten = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"createHealthBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getHospital","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRecordId","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_recordId","type":"uint32"}],"name":"getRecord","outputs":[{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_id","type":"uint16"}],"name":"getRole","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUser","outputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_doctorAddress","type":"address"},{"internalType":"address","name":"_hospitalAddress","type":"address"},{"internalType":"uint256","name":"_checkDate","type":"uint256"},{"internalType":"string","name":"_hashValue","type":"string"},{"internalType":"string","name":"_urlAPI","type":"string"}],"name":"insertRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_hospitalCode","type":"string"}],"name":"setHospital","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_roleId","type":"uint16"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_nationalId","type":"uint256"}],"name":"setUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_fromId","type":"uint32"},{"internalType":"uint32","name":"_toId","type":"uint32"},{"internalType":"address","name":"_doctorAddress","type":"address"},{"internalType":"address","name":"_hospitalAddress","type":"address"},{"internalType":"uint256","name":"_checkDate","type":"uint256"},{"internalType":"string","name":"_hashValue","type":"string"},{"internalType":"string","name":"_urlAPI","type":"string"}],"name":"updateRecord","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const ganache = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            }
        ],
        "name": "createHealthBook",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_doctorAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_checkDate",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_urlAPI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_diseaseName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_diagnosticDetail",
                "type": "string"
            }
        ],
        "name": "insertRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "_roleId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_nationalId",
                "type": "uint256"
            }
        ],
        "name": "insertUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_hospitalAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "bytes8",
                "name": "_hospitalCode",
                "type": "bytes8"
            }
        ],
        "name": "setHospital",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_oldPass",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_newPass",
                "type": "bytes32"
            }
        ],
        "name": "setPass",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "setRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_doctorAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_checkDate",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_urlAPI",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_diseaseName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_diagnosticDetail",
                "type": "string"
            },
            {
                "internalType": "uint32",
                "name": "_fromId",
                "type": "uint32"
            }
        ],
        "name": "updateRecord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_roleId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_nationalId",
                "type": "uint256"
            }
        ],
        "name": "updateUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_hospitalAddress",
                "type": "address"
            }
        ],
        "name": "getHospital",
        "outputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "bytes8",
                "name": "_hospitalCode",
                "type": "bytes8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            }
        ],
        "name": "getLastRecordId",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "_contractOwner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_password",
                "type": "bytes32"
            }
        ],
        "name": "getPass",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "_contractPass",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "_recordId",
                "type": "uint32"
            }
        ],
        "name": "getRecord",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_id",
                "type": "uint16"
            }
        ],
        "name": "getRole",
        "outputs": [
            {
                "internalType": "string",
                "name": "_roleName",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "_roleId",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_nationalId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

module.exports = {
    ropsten,
    ganache
}
