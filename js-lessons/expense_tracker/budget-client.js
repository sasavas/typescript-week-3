import { addIncome, spend, displayCurrentBudget } from "./budget-api.js";

displayCurrentBudget();

spend(10);

addIncome(100);
addIncome(45);

displayCurrentBudget();

spend(90);

displayCurrentBudget();