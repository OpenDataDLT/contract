const Web3 = require('web3');
const contract = require('truffle-contract');
const uuidv4 = require('uuid/v4');
const odpid_artifact = require('../build/contracts/Odpid.json');
var Odpid = contract(odpid_artifact);
var solc = require('solc');
const path = require('path');
const fs = require('fs');
const config = require('../config');
var web3 = new Web3();
/*
connect web3 provider
*/
web3.setProvider(new web3.providers.HttpProvider(`${config.RPC_PROTOCOL}://${config.RPC_HOST}:${config.RPC_PORT}`));


const contracts = path.resolve(__dirname,'..','contracts','Odpid.sol');
const source = fs.readFileSync(contracts, 'UTF-8');
let odpidByteCode = solc.compile(source, 1)["contracts"][":Odpid"].bytecode;
web3.eth.defaultAccount = web3.eth.accounts[0];
let odpidContract = web3.eth.contract(odpid_artifact.abi);

/*
deploy contract
*/
const deployContract = odpidContract.new([], {data: odpidByteCode},function(err, res) {
  if(!err){
    transactionHash = deployContract.transactionHash;
    let recipt = web3.eth.getTransactionReceipt(deployContract.transactionHash);
    if (recipt && recipt.contractAddress) {
      process.env.CONTRACT_ADDRESS = recipt.contractAddress;
      console.log("recipt" + JSON.stringify(recipt));
    }
  }
});

module.exports = {

  start: function(success, error) {
    var self = this;
    Odpid.setProvider(self.web3.currentProvider);
    self.web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        error("There was an error fetching your accounts.");
        return;
      }
      if (accs.length == 0) {
        error("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      self.accounts = accs;
      success(self.accounts);
    });
  },

  createOdpid: function (dataset, type, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var uuid = uuidv4();
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.addUDID(uuid, type, dataset);
      _success({transactionHash: response , uuid: uuid, Address: web3.eth.accounts[0]})
    }
    catch(err) {
      _error(err);
    }
  },
  getOdpid: function (index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getUDID(index);
      _success({uuid: response, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      _error(err);
    }
  },
  getOdpidOfAddress: function (account, index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getUDIDofAddress(account, index);
      _success({uuid: response, queryAddress: account, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getType: function (index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getType(index);
      _success({type: response, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getTypeOfAddress: function (account, index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getTypeofAddress(account, index);
      _success({type: response, queryAddress: account, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getDataset: function (index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getDataset(index);
      _success({name: response, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getDatasetOfAddress: function (account, index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getDatasetofAddress(account, index);
      _success({name: response, queryAddress: account, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getDetails: function (index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getDetails(index);
      _success({response: response, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getDetailsOfAddress: function (account, index, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getDetailsofAddress(account, index);
      _success({response: response, queryAddress: account, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getNumberOfDataset: function (_success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getNumberOfDataset();
      _success({count: response, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
  getNumberOfDatasetOfAddress: function (account, _success, _error) {
    try {
      var contract = web3.eth.contract(odpid_artifact.abi);
      var myContract = contract.at(process.env.CONTRACT_ADDRESS);
      var response = myContract.getNumberOfDatasetofAddress(account);
      _success({count: response, queryAddress: account, ownerAddress: web3.eth.accounts[0]})
      return response;
    }
    catch(err) {
      console.log(err);
      var error = {};
      error.error = err.message;
      _error ({error: error});
    }
  },
}
