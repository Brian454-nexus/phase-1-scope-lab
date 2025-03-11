// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'joe';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'; // This will throw an error because leastFavoriteCustomer is a constant
}
