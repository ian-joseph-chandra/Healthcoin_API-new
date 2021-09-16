pragma solidity >=0.4.0 <=0.9.0;

contract Hospital {
    uint256 id;
    string name;

    constructor(uint256 _id, string memory _name){
        id = _id;
        name = _name;
    }

    function getId() public view returns (uint256 _id){
        _id = id;
    }

    function setId(uint256 _id) public {
        id = _id;
    }

    function getName() public view returns (string memory _name){
        _name = name;
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
