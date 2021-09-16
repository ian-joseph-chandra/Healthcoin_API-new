pragma solidity >=0.4.0 <=0.9.0;

import "./User.sol";
import "./Doctor.sol";
import "./Hospital.sol";

contract Record {
    uint256 id;
    User patient;
    Doctor doctor;
    Hospital hospital;
    uint256 date;
    string disease;
    string diagnose;
    string urlAPI;

    constructor(
        uint256 _id,
        User _patient,
        Doctor _doctor,
        Hospital _hospital,
        uint256 _date,
        string _disease,
        string _diagnose,
        string _urlAPI
    ){
        id = _id;
        patient = _patient;
        doctor = _doctor;
        hospital = _hospital;
        date = _date;
        disease = _disease;
        diagnose = _diagnose;
        urlAPI = _urlAPI;
    }

    function getId() public view returns (uint256 _id){
        _id = id;
    }

    function setId(uint256 _id) public {
        id = _id;
    }

    function getPatient() public view returns (uint256 _patient){
        _patient = patient;
    }

    function setPatient(User _patient) public {
        patient = _patient;
    }

    function getDoctor() public view returns (uint256 _doctor){
        _doctor = doctor;
    }

    function setDoctor(User _doctor) public {
        doctor = _doctor;
    }

    function getHospital() public view returns (uint256 _hospital){
        _hospital = hospital;
    }

    function setHospital(User _hospital) public {
        hospital = _hospital;
    }

    function getDate() public view returns (uint256 _date){
        _date = date;
    }

    function setDate(User _date) public {
        date = _date;
    }

    function getDisease() public view returns (uint256 _disease){
        _disease = disease;
    }

    function setDisease(User _disease) public {
        disease = _disease;
    }

    function getDiagnose() public view returns (uint256 _diagnose){
        _diagnose = diagnose;
    }

    function setDiagnose(User _diagnose) public {
        diagnose = _diagnose;
    }

    function getUrlAPI() public view returns (uint256 _urlAPI){
        _urlAPI = urlAPI;
    }

    function setUrlAPI(User _urlAPI) public {
        urlAPI = _urlAPI;
    }
}
