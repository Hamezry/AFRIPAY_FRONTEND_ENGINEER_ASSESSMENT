export class CurrencyFormatter {
  private static readonly CURRENCY_SYMBOL = "₦";
  private static readonly DECIMAL_PLACES = 2;

  /**
   * @param amount
   * @returns
   */
  static format(amount: number): string {
    return `${this.CURRENCY_SYMBOL}${amount
      .toFixed(this.DECIMAL_PLACES)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

  /**
   * Format a number as currency without symbol (for calculations)
   * @param amount
   * @returns Formatted number string (e.g., "1,234.56")
   */
  static formatNumber(amount: number): string {
    return amount
      .toFixed(this.DECIMAL_PLACES)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

