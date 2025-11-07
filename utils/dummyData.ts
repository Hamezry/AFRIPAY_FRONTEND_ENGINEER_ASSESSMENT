import { Transaction } from "@/types/transaction";

export const getInitialDummyData = (): Transaction[] => {
  const now = new Date();
  const dates = [
    new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    new Date(now.getTime() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
    new Date(now.getTime() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  ];

  return [
    {
      id: "1",
      description: "Salary Payment",
      amount: 5000.0,
      type: "credit",
      date: dates[0],
    },
    {
      id: "2",
      description: "Grocery Shopping",
      amount: 125.5,
      type: "debit",
      date: dates[1],
    },
    {
      id: "3",
      description: "Freelance Project Payment",
      amount: 1500.0,
      type: "credit",
      date: dates[2],
    },
    {
      id: "4",
      description: "Electricity Bill",
      amount: 85.75,
      type: "debit",
      date: dates[3],
    },
    {
      id: "5",
      description: "Investment Return",
      amount: 250.0,
      type: "credit",
      date: dates[4],
    },
    {
      id: "6",
      description: "Restaurant Dinner",
      amount: 45.2,
      type: "debit",
      date: dates[5],
    },
    {
      id: "7",
      description: "Online Course Refund",
      amount: 199.99,
      type: "credit",
      date: dates[6],
    },
    {
      id: "8",
      description: "Gas Station",
      amount: 60.0,
      type: "debit",
      date: dates[7],
    },
  ];
};

