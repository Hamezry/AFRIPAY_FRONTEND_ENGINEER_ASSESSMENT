"use client";

import { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { Transaction } from "@/types/transaction";
import { storageService } from "@/services/StorageService";
import { exportService } from "@/services/ExportService";
import { getInitialDummyData } from "@/utils/dummyData";
import { CurrencyFormatter } from "@/utils/currency";
import TransactionList from "@/components/TransactionList";
import TransactionForm from "@/components/TransactionForm";
import FilterButtons, { FilterType } from "@/components/FilterButtons";
import SummaryStats from "@/components/SummaryStats";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Load transactions from storage on mount, or use dummy data if empty
  useEffect(() => {
    const stored = storageService.getTransactions();
    if (stored.length === 0) {
      // If storage is empty, initialize with dummy data
      const dummyData = getInitialDummyData();
      setTransactions(dummyData);
      storageService.saveTransactions(dummyData);
    } else {
      setTransactions(stored);
    }
  }, []);

  // Save transactions to storage whenever they change
  useEffect(() => {
    storageService.saveTransactions(transactions);
  }, [transactions]);

  // Filter transactions based on current filter
  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;
    return transactions.filter((t) => t.type === filter);
  }, [transactions, filter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTransactions.slice(startIndex, endIndex);
  }, [filteredTransactions, currentPage, itemsPerPage]);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleAddTransaction = (
    transactionData: Omit<Transaction, "id" | "date">
  ) => {
    // Generate sequential numeric ID
    const existingIds = transactions
      .map((t) => parseInt(t.id, 10))
      .filter((id) => !isNaN(id));
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    const nextId = (maxId + 1).toString();

    const newTransaction: Transaction = {
      ...transactionData,
      id: nextId,
      date: new Date().toISOString(),
    };

    setTransactions((prev) => [newTransaction, ...prev]);

    // Show success toast notification
    toast.success(
      `Transaction "${transactionData.description}" (${CurrencyFormatter.format(
        transactionData.amount
      )}) added successfully!`,
      {
        icon: "✅",
        duration: 3000,
      }
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of transactions list
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleExportCSV = () => {
    exportService.exportToCSV(filteredTransactions);
  };

  const handleExportXLSX = () => {
    exportService.exportToXLSX(filteredTransactions);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Transaction Dashboard
          </h1>
          <p className="text-gray-600">Manage your transactions efficiently</p>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              + Add Transaction
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleExportCSV}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Export CSV
              </button>
              <button
                onClick={handleExportXLSX}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                Export Excel
              </button>
            </div>
          </div>
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
        </div>

        {/* Summary Statistics */}
        <SummaryStats transactions={filteredTransactions} />

        {/* Transactions List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Transactions {filter !== "all" && `(${filter})`}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Showing {filteredTransactions.length} of {transactions.length}{" "}
              transactions
            </p>
          </div>
          <div className="p-6">
            <TransactionList transactions={paginatedTransactions} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalItems={filteredTransactions.length}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        </div>
      </div>

      {/* Transaction Form Modal */}
      {showForm && (
        <TransactionForm
          onSubmit={handleAddTransaction}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

