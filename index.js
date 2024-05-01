// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
const resT1 = transactions.filter((transaction) => {
  if (transaction.includes("income")) {
    return true;
  } else {
    return false;
  }
});

const resT2 = transactions.filter((transaction) => {
  if (transaction.includes("expense")) {
    return true;
  } else {
    return false;
  }
});

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
let sum1 = 0;
const calT3 = transactions.filter((income) => {
  if (income.includes("income")) {
    return (sum1 += income[1]);
  } else {
    return false;
  }
});

let sum2 = 0;
const calT4 = transactions.filter((income) => {
  if (income[0] == "expense") {
    return (sum2 += income[1]);
  } else {
    return false;
  }
});

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/
let totlaIncome = 0;
let totalExpenses = 0;
const total = transactions.forEach((income) => {
  if (income[0] == "income") {
    return (totlaIncome += income[1]);
  } else if (income[0] == "expense") {
    return (totalExpenses += income[1]);
  } else {
    return false;
  }
  return totlaIncome - totalExpenses;
});

const totalNet = totlaIncome - totalExpenses;
//---------------------------------------------------------------/
const aboveThan500 = [];
const bigger = transactions.forEach((income) => {
  if (income[1] >= 500) {
    return aboveThan500.push(income);
  } else {
    return false;
  }
});
console.log(aboveThan500);
// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
