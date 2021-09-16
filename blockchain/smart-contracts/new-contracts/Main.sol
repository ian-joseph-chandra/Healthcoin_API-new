pragma solidity >=0.4.0 <=0.9.0;

import "./models/UserRole.sol";
import "./models/User.sol";
import "./models/Doctor.sol";
import "./models/Hospital.sol";
import "./models/Record.sol";
import "./models/RecordUpdate.sol";
import "./models/RecordAccess.sol";

contract Main {
    UserRole patientRole;
    User patient;
    Doctor doctor;
    Hospital hospital;
    Record record;
    RecordUpdate recordUpdate;
    RecordAccess recordAccess;
    
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
