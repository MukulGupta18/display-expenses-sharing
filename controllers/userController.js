// controllers/userController.js
const readlineSync = require('readline-sync');
const { users, expenses } = require('../data/dataStore');

const addUser = () => {
    const name = readlineSync.question('Enter user name: ');
    const email = readlineSync.questionEMail('Enter user email: ');
    const mobile = readlineSync.question('Enter user mobile number: ');

    const user = { id: users.length + 1, name, email, mobile };
    users.push(user);
    console.log('User added successfully');
};

const viewUserExpenses = () => {
    const userId = readlineSync.question('Enter user ID to view expenses: ');

    const userExpenses = expenses.filter(expense => expense.userId === parseInt(userId));
    if (userExpenses.length > 0) {
        console.log(`Expenses for user ID ${userId}:`);
        userExpenses.forEach(expense => {
            console.log(`Amount: ${expense.amount}, Description: ${expense.description}`);
        });
    } else {
        console.log('No expenses found for this user.');
    }
};

const viewAllUsers = () => {
    if (users.length > 0) {
        console.log('All Users:');
        users.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Mobile: ${user.mobile}`);
        });
    } else {
        console.log('No users found.');
    }
};

module.exports = { addUser, viewUserExpenses, viewAllUsers };
