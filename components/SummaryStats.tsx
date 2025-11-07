"use client";

import { Transaction } from "@/types/transaction";
import { CurrencyFormatter } from "@/utils/currency";

interface SummaryStatsProps {
  transactions: Transaction[];
}

export default function SummaryStats({ transactions }: SummaryStatsProps) {
  const inflow = transactions
    .filter((t) => t.type === "credit")
    .reduce((sum, t) => sum + t.amount, 0);

  const outflow = transactions
    .filter((t) => t.type === "debit")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = inflow - outflow;

  const stats = [
    { label: "Total Inflow", value: inflow, color: "text-green-600" },
    { label: "Total Outflow", value: outflow, color: "text-red-600" },
    {
      label: "Net Balance",
      value: balance,
      color: balance >= 0 ? "text-green-600" : "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
        >
          <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
          <p className={`text-2xl font-bold ${stat.color}`}>
            {CurrencyFormatter.format(stat.value)}
          </p>
        </div>
      ))}
    </div>
  );
}

