const MedicalRecord = artifacts.require("./MedicalRecord.sol"),
    UserData = artifacts.require("./UserData.sol");

module.exports = function (deployer) {
    deployer.deploy(UserData);
    deployer.deploy(MedicalRecord);
}
