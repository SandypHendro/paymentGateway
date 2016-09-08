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
        models.Customer.findById(id)
            .then(function (customers) {
                resolve(customers);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var customerCreate = function (customerParam) {
    return new Promise(function (resolve, reject) {
        models.Customer.create(customerParam)
            .then(function (customers) {
                resolve(customers);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var customerUpdate = function (id) {
    return new Promise(function (resolve, reject) {
        models.Customer.findById(id)
            .then(function (customer) {
                customer.updateAttributes(customerParams)
                    .then(function (updateCustomer) {
                        resolve(customers = updateCustomer);
                    })
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