// app.js
const readlineSync = require('readline-sync');
const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');

const mainMenu = () => {
    console.log('Daily Expenses Sharing Application');
    console.log('1. Add User');
    console.log('2. Add Expense');
    console.log('3. View User Expenses');
    console.log('4. View All Expenses');
    console.log('5. Exit');

    const choice = readlineSync.question('Choose an option: ');

    switch (choice) {
        case '1':
            userController.addUser();
            break;
        case '2':
            expenseController.addExpense();
            break;
        case '3':
            userController.viewUserExpenses();
            break;
        case '4':
            expenseController.viewAllExpenses();
            break;
        case '5':
            process.exit();
            break;
        default:
            console.log('Invalid option, please try again.');
    }
};

while (true) {
    mainMenu();
}
