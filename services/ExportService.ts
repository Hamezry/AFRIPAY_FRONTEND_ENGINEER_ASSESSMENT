import { Transaction } from "@/types/transaction";
import { IExportService } from "@/interfaces/IExportService";
import * as XLSX from "xlsx";

export class ExportService implements IExportService {
  /**
   * Export transactions to CSV format
   * @param transactions - Array of transactions to export
   */
  exportToCSV(transactions: Transaction[]): void {
    if (transactions.length === 0) {
      alert("No transactions to export");
      return;
    }

    const headers = ["ID", "Description", "Amount (₦)", "Type", "Date"];
    const rows = transactions.map((t) => [
      t.id,
      t.description,
      t.amount.toFixed(2),
      t.type,
      t.date,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `transactions_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Export transactions to Excel (XLSX) format
   * @param transactions - Array of transactions to export
   */
  exportToXLSX(transactions: Transaction[]): void {
    if (transactions.length === 0) {
      alert("No transactions to export");
      return;
    }

    const data = transactions.map((t) => ({
      ID: t.id,
      Description: t.description,
      "Amount (₦)": t.amount,
      Type: t.type,
      Date: t.date,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    XLSX.writeFile(
      workbook,
      `transactions_${new Date().toISOString().split("T")[0]}.xlsx`
    );
  }
}

export const exportService = new ExportService();

