import { Transaction } from "@/types/transaction";
import { IStorageService } from "@/interfaces/IStorageService";

export class StorageService implements IStorageService {
  private static readonly STORAGE_KEY = "afripay_transactions";

  /**
   * Retrieve all transactions from localStorage
   * @returns Array of transactions
   */
  getTransactions(): Transaction[] {
    if (typeof window === "undefined") return [];

    try {
      const stored = localStorage.getItem(StorageService.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  }

  /**
   * Save transactions to localStorage
   * @param transactions - Array of transactions to save
   */
  saveTransactions(transactions: Transaction[]): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(
        StorageService.STORAGE_KEY,
        JSON.stringify(transactions)
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
}

export const storageService = new StorageService();

