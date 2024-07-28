// app.js
const readlineSync = require('readline-sync');
const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');
const balanceSheetController = require('./controllers/balanceSheetController');

const mainMenu = () => {
    console.log('Daily Expenses Sharing Application');
    console.log('1. Add User');
    console.log('2. Add Expense');
    console.log('3. View User Expenses');
    console.log('4. View All Expenses');
    console.log('5. View All Users'); // New option to view all users
    console.log('6. Split Expense Equally');
    console.log('7. Split Expense Exactly');
    console.log('8. Split Expense by Percentage');
    console.log('9. View Balance Sheet');
    console.log('10. Download Balance Sheet');
    console.log('11. Exit');

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
            userController.viewAllUsers();
            break;
        case '6':
            expenseController.splitExpenseEqually();
            break;
        case '7':
            expenseController.splitExpenseExactly();
            break;
        case '8':
            expenseController.splitExpenseByPercentage();
            break;
        case '9':
            balanceSheetController.viewBalanceSheet();
            break;
        case '10':
            balanceSheetController.downloadBalanceSheet();
            break;
        case '11':
            process.exit();
            break;
        default:
            console.log('Invalid option, please try again.');
    }
};

while (true) {
    mainMenu();
}
