// controllers/expenseController.js
const readlineSync = require('readline-sync');
const { users, expenses } = require('../data/dataStore');

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

module.exports = { addExpense, viewAllExpenses };
