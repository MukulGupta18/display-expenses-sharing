// controllers/userController.js
const readlineSync = require('readline-sync');
const { users, expenses } = require('../data/dataStore');

const addUser = () => {
    const name = readlineSync.question('Enter user name: ');
    const email = readlineSync.question('Enter user email: ');
    const mobile = readlineSync.question('Enter user mobile: ');

    const user = { id: users.length + 1, name, email, mobile };
    users.push(user);
    console.log('User added successfully');
};

const viewUserExpenses = () => {
    const userId = readlineSync.question('Enter user ID: ');

    const userExpenses = expenses.filter(expense => expense.userId == userId);
    if (userExpenses.length > 0) {
        console.log(`Expenses for user ${userId}:`);
        userExpenses.forEach(expense => {
            console.log(`Amount: ${expense.amount}, Description: ${expense.description}`);
        });
    } else {
        console.log('No expenses found for this user.');
    }
};

module.exports = { addUser, viewUserExpenses };
