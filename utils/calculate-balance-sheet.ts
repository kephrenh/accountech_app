const calculateBalanceSheet = (transactions: { type: string; amount: number }[]) => {
  let assets = 0;
  let liabilities = 0;

  transactions.forEach(({ type, amount }) => {
    if (type === "asset") {
      assets += amount;
    } else if (type === "liability") {
      liabilities += amount;
    }
  });

  return {
    assets,
    liabilities,
    equity: assets - liabilities,
  };
};

export default calculateBalanceSheet;
