let budget, totalExpense, totalIncome;
budget = totalExpense = totalIncome = 0;

export function spend(sum) {
    if (sum > budget) {
        console.error(`ERR: Spending (${sum}) exceeds budget (${budget})\n`);
        return;
    }

    budget -= sum;
    totalExpense += sum;
    console.log(`Spending ${sum}.\n`);
}

export function addIncome(sum) {
    budget += sum;
    totalIncome += sum;
    console.log(`Added ${sum}.\n`)
}

export function displayCurrentBudget() {
    console.log(
`Budget Report
----------------
Current budget is: ${budget}
total income ${totalIncome}
total expense: ${totalExpense}
\n`);
}