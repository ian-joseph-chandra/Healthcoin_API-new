pragma solidity >=0.4.22 <=0.8.0;

/**
@title smart-contracts Contract
@author Ian Joseph Chandra
@notice The main contract of smart-contracts Blockchain EHR project
@dev The purpose of this contract is to maintain the owner of the smart-contracts smart-contracts
*/

contract Healthcoin {
    address contractOwner;
    bytes32 contractPass;

    /**
    @dev Setup the contract owner & password
    */
    constructor() public {
        contractOwner = msg.sender;
        contractPass = 0x3564316365376362333364376432396164323631313937613761643234383166;
    }

    /**
    @notice Get the contract owner account address
    @dev Only the owner of the smart-contract who can perform this function
    @return  _contractOwner The contract owner account address
    */
    function getOwner() public view onlyOwner returns (address _contractOwner) {
        _contractOwner = contractOwner;
    }

    /**
    @notice Get the password of the smart-contracts smart-contract
    @dev Only the owner of the smart-contract who can perform this function
    @param _password The contract password to be checked
    @return _contractPass The contract passwords
    */
    function getPass(bytes32 _password)
    public
    view
    onlyOwner
    correctPass(_password)
    returns (bytes32 _contractPass)
    {
        _contractPass = contractPass;
    }

    /**
    @notice Set the new password of the smart-contracts smart-contract
    @dev Only the owner of the smart-contract who can perform this function. Verify the old password before performing password update
    @param _oldPass The old password
    @param _newPass The new password
    */
    function setPass(bytes32 _oldPass, bytes32 _newPass)
    public
    onlyOwner
    correctPass(_oldPass)
    {
        contractPass = _newPass;
    }

    /**
    @notice Validate the owner of the smart-contracts smart-contract
    @dev Valid if the msg.sender is the contract owner
    */
    modifier onlyOwner() {
        require(msg.sender == contractOwner);
        _;
    }

    /**
    @notice Validate the old password of smart-contracts smart-contract
    @dev Valid if the _password is the same with the contract password
    @param _password The password to be checked
    */
    modifier correctPass(bytes32 _password) {
        require(contractPass == _password);
        _;
    }
}
