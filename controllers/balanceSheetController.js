// controllers/balanceSheetController.js
const { users, expenses } = require('../data/dataStore');
const readlineSync = require('readline-sync');
const fs = require('fs');

const viewBalanceSheet = () => {
    console.log('Balance Sheet:');
    users.forEach(user => {
        const userExpenses = expenses.filter(expense => expense.userId === user.id);
        const totalExpenses = userExpenses.reduce((acc, expense) => acc + expense.amount, 0);
        console.log(`${user.name} owes: ${totalExpenses}`);
    });
};

const downloadBalanceSheet = () => {
    let balanceSheet = 'Balance Sheet:\n';
    users.forEach(user => {
        const userExpenses = expenses.filter(expense => expense.userId === user.id);
        const totalExpenses = userExpenses.reduce((acc, expense) => acc + expense.amount, 0);
        balanceSheet += `${user.name} owes: ${totalExpenses}\n`;
    });

    fs.writeFileSync('balanceSheet.txt', balanceSheet);
    console.log('Balance sheet downloaded as balanceSheet.txt');
};

module.exports = { viewBalanceSheet, downloadBalanceSheet };
