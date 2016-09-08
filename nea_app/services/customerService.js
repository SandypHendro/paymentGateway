var promise = require('bluebird');
var models = require('../models/index');

var customerListing = function () {
    return new Promise(function (resolve, reject) {
        models.Customer.findAll()
            .then(function (customers) {
                resolve(customers);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var customerRetrive = function (id) {
    return new Promise(function (resolve, reject) {
        models.Customer.findAll(id)
            .then(function (customers) {
                resolve(customers);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var customerCreate = function () {
    return new Promise(function (resolve, reject) {
        models.Customer.findAll()
            .then(function (customers) {
                resolve(customers);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

module.exports  =  {
    customerL: customerListing,
    customerR: customerRetrive,
    customerC: customerCreate,
    customerU: customerUpdate
}