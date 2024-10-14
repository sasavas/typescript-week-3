#!/usr/bin/env node

const readline = require('readline');
const api = require('./budget-api.js');

// Initialize the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Command instructions
const instructions = `
Available commands:
- add [amount]: Add income to the budget.
- spend [amount]: Spend from the budget.
- report: Display the current budget, total income, and total expenses.
- exit: Exit the CLI.
`;

console.log(instructions);

function handleCommand(input) {
    const [command, ...args] = input.trim().split(' ');

    switch (command) {
        case 'add':
            if (args.length === 1 && !isNaN(args[0])) {
                api.addIncome(parseFloat(args[0]));
            } else {
                console.log("Invalid input. Use: add [amount]");
            }
            break;
        case 'spend':
            if (args.length === 1 && !isNaN(args[0])) {
                api.spend(parseFloat(args[0]));
            } else {
                console.log("Invalid input. Use: spend [amount]");
            }
            break;
        case 'report':
            displayCurrentBudget();
            break;
        case 'exit':
            rl.close();
            break;
        default:
            console.log("Unknown command. Please try again.");
            break;
    }
}

// Listen for user input
rl.on('line', handleCommand);

// On exit, show a goodbye message
rl.on('close', () => {
    console.log("Goodbye!");
    process.exit(0);
});
