pragma solrecordity >=0.4.0 <=0.9.0;

import "./Record.sol";

contract RecordAccess {
    Record record;
    string token;
    uint256 terminationTime;

    constructor(Record _record, string _token, uint256 _terminationTime){
        record = _record;
        token = _token;
        terminationTime = _terminationTime;
    }

    function getRecord() public view returns (Record _record){
        _record = record;
    }

    function setRecord(Record _record) public {
        record = _record;
    }

    function getToken() public view returns (string _token){
        _token = token;
    }

    function setToken(string _token) public {
        token = _token;
    }

    function getTerminationTime() public view returns (uint256 _terminationTime){
        _terminationTime = terminationTime;
    }

    function setTerminationTime(uint256 _terminationTime) public {
        terminationTime = _terminationTime;
    }
}
