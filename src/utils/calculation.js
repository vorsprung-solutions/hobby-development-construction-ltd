export const getTotalIncome = (income) => {
  let totalIncome = 0;
  income?.map((item) => {
    let sum = 0;
    const amount = item?.income?.map((i) => {
      sum += i?.amount;
    });
    totalIncome += sum;
  });
  return totalIncome;
};

export const getTotalExponse = (expense) => {
  let totalExpense = 0;
  expense?.map((item) => {
    let sum = 0;
    const amount = item?.expense?.map((i) => {
      sum += i?.amount;
    });
    totalExpense += sum;
  });
  return totalExpense;
};
