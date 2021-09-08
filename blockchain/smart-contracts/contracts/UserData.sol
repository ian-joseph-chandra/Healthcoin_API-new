pragma solidity >=0.4.22 <=0.8.0;

import "./Healthcoin.sol";

/**
@title UserData contract
@author Ian Joseph Chandra
@notice Several CRUD functions for the users data are provided in this contract
@dev This contract is the children of smart-contracts contract
*/

contract UserData is Healthcoin {
    Healthcoin healthcoin;

    uint16 roleId;

    uint16 lastRoleId;

    struct User {
        uint16 roleId;
        string name;
        uint256 nationalId;
    }

    struct Hospital {
        string name;
        bytes8 hospitalCode;
    }

    mapping(uint16 => string) roles;
    mapping(address => User) users;
    mapping(address => Hospital) hospitals;


    /**
    @dev Setup initial roles
    */
    constructor() public{
        roles[1] = "patient";
        roles[2] = "doctor";
        lastRoleId = 2;
    }

    /**
    @notice Insert a new role
    @dev Increment the last role ID and register a new role. Only the contract owner who can register a new role
    @param _name The role name
    */
    function setRole(string memory _name) public onlyOwner {
        lastRoleId++;
        roles[lastRoleId] = _name;
    }

    /**
    @notice Get a role data
    @dev Get a role based on the role ID
    @param _id The role ID
    @return _roleName The role name
    */
    function getRole(uint16 _id) public view returns (string memory _roleName) {
        _roleName = roles[_id];
    }

    /**
    @notice Insert a new user
    @dev The user must be unregistered in this contract. Only hospital account which can perform this function.
    @param _userAddress The user account address
    @param _roleId The role ID of the user
    @param _name The user name
    @param _nationalId The national ID of the user
    */
    function insertUser(
        address _userAddress,
        uint16 _roleId,
        string memory _name,
        uint256 _nationalId
    ) public senderIsHospital userNotExists(_userAddress) {
        users[_userAddress] = User({
            roleId: _roleId,
            name: _name,
            nationalId: _nationalId
        });
    }

    /**
    @notice Update a user
    @dev The user must be exists before performing this function
    @param _roleId The new role ID
    @param _name The new user name
    @param _nationalId The new user national ID
    */
    function updateUser(
        uint16 _roleId,
        string memory _name,
        uint256 _nationalId
    ) public userExists(msg.sender) {
        users[msg.sender] = User({
            roleId: _roleId,
            name: _name,
            nationalId: _nationalId
        });
    }

    /**
    @notice Get a user data
    @dev Get a user data based on the account address
    @param _userAddress The user account address
    @return _roleId The user role ID
    @return _name The user name
    @return _nationalId The user national ID
    */
    function getUser(address _userAddress)
        public
        view
        returns (
            uint16 _roleId,
            string memory _name,
            uint256 _nationalId
        )
    {
        return (
            _roleId = users[_userAddress].roleId,
            _name = users[_userAddress].name,
            _nationalId = users[_userAddress].nationalId
        );
    }

    /**
    @notice Insert a new hospital
    @dev Only the contract owner which can perform this function
    @param _hospitalAddress The hospital account address
    @param _name The name of the hospital
    @param _hospitalCode The hospital national ID
    */
    function setHospital(
        address _hospitalAddress,
        string memory _name,
        bytes8 _hospitalCode
    ) public onlyOwner {
        hospitals[_hospitalAddress] = Hospital({
            name: _name,
            hospitalCode: _hospitalCode
        });
    }

    /**
    @notice Get a hospital data
    @dev Get a hospital data based on the account address
    @param _hospitalAddress The hospital account address
    @return _name The hospital name
    @return _hospitalCode The hospital national ID
    */
    function getHospital(address _hospitalAddress)
        public
        view
        returns (string memory _name, bytes8 _hospitalCode)
    {
        return (
            _name = hospitals[_hospitalAddress].name,
            _hospitalCode = hospitals[_hospitalAddress].hospitalCode
        );
    }

    /**
    @notice Check the non-existence of a user
    @dev Valid if the user is not exists
    @param _userAddress The user account address
    */
    modifier userNotExists(address _userAddress) {
        require(bytes(users[_userAddress].name).length == 0);
        _;
    }

    /**
    @notice Check the existence of a user
    @dev Valid if the user is exists
    @param _userAddress The user account address
    */
    modifier userExists(address _userAddress) {
        require(bytes(users[_userAddress].name).length > 0);
        _;
    }

    /**
    @notice Check the sender account is a hospital
    @dev Valid if the msg.sender account is a hospital
    */
    modifier senderIsHospital() {
        require(bytes(hospitals[msg.sender].name).length > 0);
        _;
    }

    /**
    @notice Check the user is a doctor
    @dev Valid if the account address role is 2 (doctor)
    @param _userAddress The user account address
    */
    modifier userIsDoctor(address _userAddress) {
        require(users[_userAddress].roleId == 2);
        _;
    }
}
