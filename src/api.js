const express = require('express');
var app = express();
var router = express.Router();
const truffle_connect = require('./app');
var HttpStatus = require('http-status-codes');


router.get('/getaccount', (req, res) => {
    truffle_connect.start(function (result) {
      res.status(HttpStatus.OK).send(result);
    })
  });
  
  router.post('/create', (req, res) => {
    if(req.body.name === '' || req.body.name == undefined) {
        res.status(HttpStatus.BAD_REQUEST).send('dataset name is missing');
    }
    if(req.body.type === '' || req.body.type == undefined) {
        res.status(HttpStatus.BAD_REQUEST).send('dataset type is missing');
    }
    
    truffle_connect.createOdpid(req.body.name, req.body.type, (success) => {
        res.status(HttpStatus.CREATED).send(success);
    }, (fail) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
    });
  });
  
  router.get('/uuid', (req, res) => {
    var id = 0;
    if(req.query.id) {
        id = req.query.id;
    }
    if(req.query.address) {
        truffle_connect.getOdpidOfAddress(address, id, (success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    } else {
        truffle_connect.getOdpid(id,(success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    }
  });


  router.get('/type', (req, res) => {
    var id = 0;
    if(req.query.id) {
        id = req.query.id;
    }
    if(req.query.address) {
        truffle_connect.getTypeOfAddress(address, id, (success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    } else {
        truffle_connect.getType(id,(success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    }
  });


  router.get('/dataset', (req, res) => {
    var id = 0;
    if(req.query.id) {
        id = req.query.id;
    }
    if(req.query.address) {
        truffle_connect.getDatasetOfAddress(address, id, (success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    } else {
        truffle_connect.getDataset(id,(success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    }
  });

  router.get('/details', (req, res) => {
    var id = 0;
    if(req.query.id) {
        id = req.query.id;
    }
    if(req.query.address) {
        truffle_connect.getDetailsOfAddress(address, id, (success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    } else {
        truffle_connect.getDetails(id,(success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    }
  });

  router.get('/count', (req, res) => {
    if(req.query.address) {
        truffle_connect.getNumberOfDatasetOfAddress(address, (success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    } else {
        truffle_connect.getNumberOfDataset((success) => {
            res.status(HttpStatus.OK).send(success);
        }, (fail) => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
        });
    }
  });

  router.get('/alldetails', (req, res) => {
      var details = [];
    truffle_connect.getNumberOfDataset((success) => {
        var temp = 0;
        for (i=0; i< success.count; i++) {
            truffle_connect.getDetails(i,(success) => {
                details.push({uuid: success.response[0], type: success.response[1], name: success.response[2]});
            }, (fail) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
            });
            temp++;
        }
        if(temp === success.count) {
            res.status(HttpStatus.OK).send(details);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(''); 
        }
    }, (fail) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(fail);
    });
  });
  
  //expose route
  app.use('/api',router);

  module.exports = app;

