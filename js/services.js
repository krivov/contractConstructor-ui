
angular.module('inspinia')

  .factory('MainFabricContract',function () {
    var address = "0xde3f4337ea39692228cfaf405536fc3057bb3499";

    var abiMain =
      [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_address",
              "type": "address"
            },
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_contractType",
              "type": "string"
            }
          ],
          "name": "addContract",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "addFabric",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "removeFabric",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "admins",
          "outputs": [
            {
              "name": "addr",
              "type": "address"
            },
            {
              "name": "numContratcs",
              "type": "uint256"
            },
            {
              "name": "index",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "adminsAddr",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "contracts",
          "outputs": [
            {
              "name": "addr",
              "type": "address"
            },
            {
              "name": "owner",
              "type": "address"
            },
            {
              "name": "fabric",
              "type": "address"
            },
            {
              "name": "contractType",
              "type": "string"
            },
            {
              "name": "index",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "contractsAddr",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "fabrics",
          "outputs": [
            {
              "name": "addr",
              "type": "address"
            },
            {
              "name": "owner",
              "type": "address"
            },
            {
              "name": "isActive",
              "type": "bool"
            },
            {
              "name": "index",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "fabricsAddr",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_adminAddress",
              "type": "address"
            },
            {
              "name": "_index",
              "type": "uint256"
            }
          ],
          "name": "getAdminContract",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "numAdmins",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "numContracts",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "numFabrics",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ];

    var abiFabric =
      [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_name",
              "type": "string"
            },
            {
              "name": "_symbol",
              "type": "string"
            },
            {
              "name": "_decimals",
              "type": "uint8"
            },
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "_totalSupply",
              "type": "uint256"
            }
          ],
          "name": "create",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_i",
              "type": "uint256"
            }
          ],
          "name": "getParam",
          "outputs": [
            {
              "name": "title",
              "type": "string"
            },
            {
              "name": "paramType",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "mainFabricAddress",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "numParameters",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "params",
          "outputs": [
            {
              "name": "title",
              "type": "string"
            },
            {
              "name": "paramType",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "title",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]
    ;

    var mainContract = web3.eth.contract(abiMain).at(address);

    var getConstructor = function (address) {
      return web3.eth.contract(abiFabric).at(address);
    };

    var factories = {};

    var FactoriesPromise = new Promise(function (resolve, reject) {
      mainContract.numFabrics(function (error, numFabrics) {

        var countFabr = 0;
        for (var i = 0; i < numFabrics.c[0]; i++) {
          (function(i) {
            mainContract.fabricsAddr(i, function (error, fabricsAddr) {

              mainContract.fabrics(fabricsAddr, function (error, fabric) {

                console.log("FFF", fabric);

                factories[fabric[0]] = {
                  addr: fabric[0],
                  owner: fabric[1]
                };

                var constructor = getConstructor(fabric[0]);

                constructor.title(function (error, fabricTitle) {
                  factories[fabric[0]].title = fabricTitle;
                  factories[fabric[0]].params = [];

                  constructor.numParameters(function (error, numParameters) {
                    factories[fabric[0]].numParameters = numParameters.c[0];

                    for (var j = 0; j < numParameters.c[0]; j++) {
                      factories[fabric[0]].params[j] = {};

                      (function(j) {
                        constructor.params(j, function (error, consctructorParams) {
                          factories[fabric[0]].params[j].title = consctructorParams[0];
                          factories[fabric[0]].params[j].paramType = consctructorParams[1];
                        });
                      })(j);
                    }

                    countFabr++;
                    console.log('numParameters', i, numParameters, (numFabrics.c[0]-1), countFabr);
                    if (countFabr >= numFabrics.c[0]) {
                      resolve();
                    }
                  });
                });
              })
            });
          })(i);
        }
      });
    });

    var setFactories = function () {
      return FactoriesPromise;
    };

    return {
      setFactories: setFactories,
      factories: factories
    };
  });