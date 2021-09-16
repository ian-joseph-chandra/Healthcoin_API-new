pragma solidity >=0.4.0 <=0.9.0;

import "./UserRole.sol";

contract User {
    uint256 id;
    UserRole role;
    string name;

    constructor(uint256 _id, UserRole _role, string memory _name){
        id = _id;
        role = _role;
        name = _name;
    }

    function getId() public view returns (uint256 _id){
        _id = id;
    }

    function setId(uint256 _id) public {
        id = _id;
    }

    function getRole() public view returns (UserRole _role){
        _role = role;
    }

    function setRole(UserRole _role) public {
        role = _role;
    }

    function getName() public view returns (string memory _name){
        _name = name;
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
