const readlineSync = require('readline-sync');
const { users, expenses } = require('../data/dataStore');
const fs = require('fs');

const addExpense = () => {
    const userId = readlineSync.question('Enter user ID: ');
    const amount = readlineSync.question('Enter expense amount: ');
    const description = readlineSync.question('Enter expense description: ');

    const expense = { id: expenses.length + 1, userId: parseInt(userId), amount: parseFloat(amount), description };
    expenses.push(expense);
    console.log('Expense added successfully');
};

const viewAllExpenses = () => {
    if (expenses.length > 0) {
        console.log('All Expenses:');
        expenses.forEach(expense => {
            console.log(`User ID: ${expense.userId}, Amount: ${expense.amount}, Description: ${expense.description}`);
        });
    } else {
        console.log('No expenses found.');
    }
};

const splitExpenseEqually = () => {
    const numFriends = parseInt(readlineSync.question('Enter the number of friends: '));
    const totalAmount = parseFloat(readlineSync.question('Enter the total bill amount: '));
    const eachOwes = totalAmount / (numFriends + 1);
    console.log(`Each person owes: ${eachOwes.toFixed(2)}`);
};

const splitExpenseExactly = () => {
    const numFriends = parseInt(readlineSync.question('Enter the number of friends: '));
    const totalAmount = parseFloat(readlineSync.question('Enter the total bill amount: '));
    let sum = 0;
    const amounts = [];
    for (let i = 1; i <= numFriends; i++) {
        const amount = parseFloat(readlineSync.question(`Enter the amount friend ${i} owes: `));
        amounts.push(amount);
        sum += amount;
    }
    const youOwe = totalAmount - sum;
    console.log(`You owe: ${youOwe.toFixed(2)}`);
};

const splitExpenseByPercentage = () => {
    const numPeople = parseInt(readlineSync.question('Enter the number of people (including you): '));
    const totalAmount = parseFloat(readlineSync.question('Enter the total bill amount: '));
    let sum = 0;
    const percentages = [];
    for (let i = 1; i <= numPeople; i++) {
        const percentage = parseFloat(readlineSync.question(`Enter the percentage person ${i} owes (0-100): `));
        percentages.push(percentage);
        sum += percentage;
    }
    if (sum !== 100) {
        console.log('The specified percentages do not add up to 100%.');
        return;
    }
    percentages.forEach((percentage, index) => {
        const owes = (totalAmount * percentage) / 100;
        console.log(`Person ${index + 1} owes: ${owes.toFixed(2)}`);
    });
};

const downloadBalanceSheet = () => {
    const data = JSON.stringify(expenses, null, 2);
    fs.writeFileSync('balance-sheet.json', data);
    console.log('Balance sheet downloaded as balance-sheet.json');
};

module.exports = { addExpense, viewAllExpenses, splitExpenseEqually, splitExpenseExactly, splitExpenseByPercentage, downloadBalanceSheet };
