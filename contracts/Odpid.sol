pragma solidity ^0.4.17;

contract Odpid {
  struct uuid_struct {
        string _uuid;
        string _type;
        string _dataset;
        address _address;
    }

    mapping (address => uuid_struct[]) public uuids;
    // event UDIDCreated(string _uuid, string _type, string _dataset, address _address);

    function addUDID(string _uuid, string _type, string _dataset) payable public {
            uuids[msg.sender].push(uuid_struct(_uuid,_type,_dataset, msg.sender));
            // emit UDIDCreated(_uuid, _type, _dataset, msg.sender);
    }
    
    function getUDID(uint index) public view returns(string _uuid) {
        uuid_struct storage u = uuids[msg.sender][index];
        _uuid = u._uuid;
    }
    
    function getType(uint index) public view returns(string _uuid) {
        uuid_struct storage u = uuids[msg.sender][index];
        _uuid = u._type;
    }
    
    function getDataset(uint index) public view returns(string _uuid) {
        uuid_struct storage u = uuids[msg.sender][index];
        _uuid = u._dataset;
    }
    
    function getDetails(uint index) public view returns(string _uuid, string _type, string _dataset) {
        uuid_struct storage u = uuids[msg.sender][index];
        _uuid = u._uuid;
        _type = u._type;
        _dataset = u._dataset;
    }
    
    function getNumberOfDataset() public view returns (uint count) {
        count = uuids[msg.sender].length;
    }

    function getUDIDofAddress(address _address, uint index) public view returns(string _uuid) {
        uuid_struct storage u = uuids[_address][index];
        _uuid = u._uuid;
    }
    
    function getTypeofAddress(address _address, uint index) public view returns(string _uuid) {
        uuid_struct storage u = uuids[_address][index];
        _uuid = u._type;
    }
    
    function getDatasetofAddress(address _address, uint index) public view returns(string _uuid) {
        uuid_struct storage u = uuids[_address][index];
        _uuid = u._dataset;
    }
    
    function getDetailsofAddress(address _address, uint index) public view returns(string _uuid, string _type, string _dataset) {
        uuid_struct storage u = uuids[_address][index];
        _uuid = u._uuid;
        _type = u._type;
        _dataset = u._dataset;
    }
    
    function getNumberOfDatasetofAddress(address _address) public view returns (uint count) {
        count = uuids[_address].length;
    }
}