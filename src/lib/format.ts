const mxnFormatter = new Intl.NumberFormat('es-MX', {
  style: 'decimal',
  maximumFractionDigits: 0,
});

export function formatPriceMXN(amount: number): string {
  if (amount === 0) return 'Gratis';
  return `$${mxnFormatter.format(amount)} MXN`;
}

export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat('es-MX', options).format(value);
}
