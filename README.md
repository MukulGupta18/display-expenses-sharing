# Daily Expenses Sharing Application

This is a simple Node.js application to manage daily expenses and share them among friends. Users can add expenses and split them equally, exactly, or by percentage. The application also allows viewing individual and overall expenses, and provides a feature to download the balance sheet.

## Features

- **User Management:**
  - Add users with email, name, and mobile number.
  - Retrieve user details.

- **Expense Management:**
  - Add expenses.
  - Split expenses using three methods:
    1. Equal: Split equally among all participants.
    2. Exact: Specify the exact amount each participant owes.
    3. Percentage: Specify the percentage each participant owes (ensure percentages add up to 100%).

- **Balance Sheet:**
  - Show individual expenses.
  - Show overall expenses for all users.
  - Provide a feature to download the balance sheet.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/daily-expenses-sharing.git
    cd daily-expenses-sharing
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

Start the application:

```bash
npm start
