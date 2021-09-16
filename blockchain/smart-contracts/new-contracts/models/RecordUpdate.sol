pragma solidity >=0.4.0 <=0.9.0;

import "./Record.sol";

contract RecordUpdate {
    Record oldRecord;
    Record newRecord;

    constructor(Record _oldRecord, Record _newRecord){
        oldRecord = _oldRecord;
        newRecord = _newRecord;
    }

    function getOldRecord() public view returns (Record _oldRecord){
        _oldRecord = oldRecord;
    }

    function setOldRecord(Record _oldRecord) public {
        oldRecord = _oldRecord;
    }

    function getNewRecord() public view returns (Record _newRecord){
        _newRecord = newRecord;
    }

    function setNewRecord(Record _newRecord) public {
        newRecord = _newRecord;
    }
}
