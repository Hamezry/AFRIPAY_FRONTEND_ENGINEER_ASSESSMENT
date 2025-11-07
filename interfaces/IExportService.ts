import { Transaction } from "@/types/transaction";

export interface IExportService {
  /**
   * Export transactions to CSV format
   * @param transactions - Array of transactions to export
   */
  exportToCSV(transactions: Transaction[]): void;

  /**
   * Export transactions to Excel (XLSX) format
   * @param transactions - Array of transactions to export
   */
  exportToXLSX(transactions: Transaction[]): void;
}

