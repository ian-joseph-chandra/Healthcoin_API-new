pragma solidity >=0.4.0 <=0.9.0;

import "./User.sol";

contract Doctor is User {
    string licenseId;

    constructor(string memory _licenseId){
        licenseId = _licenseId;
    }

    function getLicenseId() public view returns (uint256 _licenseId){
        _licenseId = licenseId;
    }

    function setLicenseId(uint256 _licenseId) public {
        licenseId = _licenseId;
    }
}
