var models = require('../models/index');
var customerService = require('../services/customerService');

var customerListing = function (req,res) {
    customerService.customerL()
    .then(function (cust) {
        res.json({customers: cust});
    })
    .catch(function (err) {
        res.json({error:err.message});
    });

};

var customerRetrive = function (req,res) {
    var id = req.params.id;
    customerService.customerR(id)
        .then(function (customer) {
            res.json({customer:customer})
        })
        .catch(function (err) {
            res.json({error:err});
        })
};

var customerCreate= function (req, res) {
    var customerParam = req.body;
    customerService.customerC(customerParam)
        .then(function (customer) {
            res.json({customer:customer})
        })
        .catch(function (err) {
            res.json({error:err});
        })
};

var customerUpdate = function (req, res) {
    var id = req.params.id;
    var customerParams = req.body;
    customerService.customerU(id)
        .then(function (customer) {
            customer.updateAttributes(customerParams)
                .then(function (updateCustomer) {
                    res.json({customer : updateCustomer});
                })
        })
        .catch(function (err) {
            res.json({error:err});
        })
};

module.exports = {
    custL: customerListing,
    custR: customerRetrive,
    custC: customerCreate,
    custU: customerUpdate
};
