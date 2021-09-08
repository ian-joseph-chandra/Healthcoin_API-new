pragma solidity >=0.4.22 <=0.8.0;

import "./UserData.sol";

contract MedicalRecord is UserData {
    struct Record {
        address doctorAddress;
        address hospitalAddress;
        uint256 checkDate;
        string urlAPI;
        string diseaseName;
        string diagnosticDetail;
    }

    struct RecordUpdateLog {
        uint32 fromId;
        uint32 toId;
    }

    struct RecordAccess {
        uint16 accessId;
        address patientId;
        string tokenAccess;
        uint256 accessTime;
        uint256 terminateTime;
    }

    mapping(address => mapping(uint32 => Record)) healthBooks;
    mapping(address => RecordUpdateLog) recordUpdateLogs;
    mapping(address => uint32) lastRecordIdList;

    constructor() {

    }

    function createHealthBook(address _patientAddress) public senderIsHospital {
        lastRecordIdList[_patientAddress] = 1;
    }

    function insertRecord(
        address _patientAddress,
        address _doctorAddress,
        uint256 _checkDate,
        string memory _urlAPI,
        string memory _diseaseName,
        string memory _diagnosticDetail
    ) public
    healthBookExists(_patientAddress)
    senderIsHospital
    userExists(_patientAddress)
    userIsDoctor(_doctorAddress) {
        uint32 lastRecordId = lastRecordIdList[_patientAddress];

        healthBooks[_patientAddress][lastRecordId] = Record({
        doctorAddress : _doctorAddress,
        hospitalAddress : msg.sender,
        checkDate : _checkDate,
        urlAPI : _urlAPI,
        diseaseName : _diseaseName,
        diagnosticDetail : _diagnosticDetail
        });

        lastRecordIdList[_patientAddress]++;
    }

    function updateRecord(
        address _patientAddress,
        address _doctorAddress,
        uint256 _checkDate,
        string memory _urlAPI,
        string memory _diseaseName,
        string memory _diagnosticDetail,
        uint32 _fromId
    ) public
    recordExists(_patientAddress, _fromId, msg.sender)
    userExists(_patientAddress)
    userIsDoctor(_doctorAddress) {
        recordUpdateLogs[_patientAddress] = RecordUpdateLog({
        fromId : _fromId,
        toId : lastRecordIdList[_patientAddress]
        });

        insertRecord(_patientAddress, _doctorAddress, _checkDate, _urlAPI, _diseaseName, _diagnosticDetail);
    }

    function getRecord(
        address _patientAddress,
        uint32 _recordId)
    public
    view
    returns (
        address _doctorAddress,
        address _hospitalAddress,
        uint256 _checkDate,
        string memory _urlAPI,
        string memory _diseaseName,
        string memory _diagnosticDetail
    ){
        _doctorAddress = healthBooks[_patientAddress][_recordId].doctorAddress;
        _hospitalAddress = healthBooks[_patientAddress][_recordId].hospitalAddress;
        _checkDate = healthBooks[_patientAddress][_recordId].checkDate;
        _urlAPI = healthBooks[_patientAddress][_recordId].urlAPI;
        _diseaseName = healthBooks[_patientAddress][_recordId].diseaseName;
        _diagnosticDetail = healthBooks[_patientAddress][_recordId].diagnosticDetail;
    }

    function getLastRecordId(address _patientAddress) public view returns (uint32 _recordId) {
        _recordId = lastRecordIdList[_patientAddress];
    }

    modifier healthBookExists(address _patientAddress) {
        require(lastRecordIdList[_patientAddress] > 0);
        _;
    }

    modifier healthBookNotExists() {
        require(lastRecordIdList[msg.sender] == 0);
        _;
    }

    modifier recordExists(address _patientAddress, uint32 _fromId, address _hospitalAddress){
        require(healthBooks[_patientAddress][_fromId].hospitalAddress == _hospitalAddress);
        _;
    }
}
