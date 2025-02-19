const calculateIncomeStatement = (transactions: { type: string; amount: number }[]) => {
  let revenue = 0;
  let expenses = 0;

  transactions.forEach(({ type, amount }) => {
    if (type === "revenue") {
      revenue += amount;
    } else if (type === "expense") {
      expenses += amount;
    }
  });

  return {
    revenue,
    expenses,
    netIncome: revenue - expenses,
  };
};

export default calculateIncomeStatement;
