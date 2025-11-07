import { Transaction } from "@/types/transaction";

/**
 * Storage Service Interface
 */
export interface IStorageService {
  /**
   * Retrieve all transactions from storage
   * @returns Array of transactions
   */
  getTransactions(): Transaction[];

  /**
   * Save transactions to storage
   * @param transactions - Array of transactions to save
   */
  saveTransactions(transactions: Transaction[]): void;
}

