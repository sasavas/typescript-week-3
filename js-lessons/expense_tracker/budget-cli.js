#!/usr/bin/env node

import readline from 'readline';
import { spend, addIncome, displayCurrentBudget } from './budget-api.js';

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

    if (command === 'add') {
        if (args.length === 1 && !isNaN(args[0])) {
            addIncome(parseFloat(args[0]));
        } else {
            console.log("Invalid input. Use: add [amount]");
        }
    } else if (command === 'spend') {
        if (args.length === 1 && !isNaN(args[0])) {
            spend(parseFloat(args[0]));
        } else {
            console.log("Invalid input. Use: spend [amount]");
        }
    } else if (command === 'report') {
        displayCurrentBudget();
    } else if (command === 'exit') {
        rl.close();
    } else {
        console.log("Unknown command. Please try again.");
    }
}

// Listen for user input
rl.on('line', handleCommand);

// On exit, show a goodbye message
rl.on('close', () => {
    console.log("Goodbye!");
    process.exit(0);
});
