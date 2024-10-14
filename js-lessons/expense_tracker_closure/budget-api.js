const expenseTracker = (function() {
    // Private variables (accessible only within the closure)
    let budget = 0;
    let totalExpense = 0;
    let totalIncome = 0;

    // Public methods (exposed through the returned object)
    return {
        spend: function(sum) {
            if (sum > budget) {
                console.error(`ERR: Spending (${sum}) exceeds budget (${budget})\n`);
                return;
            }

            budget -= sum;
            totalExpense += sum;
            console.log(`Spending ${sum}.\n`);
        },

        addIncome: function(sum) {
            budget += sum;
            totalIncome += sum;
            console.log(`Added ${sum}.\n`);
        },

        displayCurrentBudget: function() {
            console.log(
                "Budget Report\n----------------"
                + "\nCurrent budget is: " + budget
                + "\nTotal income: " + totalIncome
                + "\nTotal expense: " + totalExpense
                + "\n");
        }
    };
})();

module.exports = expenseTracker;
