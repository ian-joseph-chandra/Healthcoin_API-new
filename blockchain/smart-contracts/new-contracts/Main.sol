pragma solidity >=0.4.0 <=0.9.0;

import "./models/UserRole.sol";
import "./models/User.sol";

contract Main {
    UserRole patientRole;
    User patient;
    
    
    // function main() public returns (string memory _userName, string memory _roleName){
    //     UserRole patientRole = new UserRole(1, "patient");
        
        // User patient = new User(1, patientRole, "Ian");

        // _userName = patient.getName();
        // _roleName = patientRole.getName();
        // return patient;
    // }
    
    function getPatientRole() public view returns (uint256 _id, string memory _name){
        _id = patientRole.getId();
        _name = patientRole.getName();
    }
    
    function setPatientRole(uint256 id, string memory name) public {
        patientRole = new UserRole(id, name);
    }
    
    function getPatient() public view returns (uint256 _id, string memory _name){
        _id = patient.getId();
        _patientRole = patientRole;
        _name = patient.getName();
    }
    
    function setPatient(uint256 id, string memory name) public {
        patient = new User(id, patientRole, name);
    }
}
