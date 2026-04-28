import { describe, it, expect } from 'vitest';
import { formatPriceMXN, formatNumber } from '../../src/lib/format';

// formatPriceMXN uses style:'decimal', maximumFractionDigits:0
// so 0 → 'Gratis', decimals are rounded, no fraction digits shown
describe('formatPriceMXN', () => {
  it('returns "Gratis" for zero', () => {
    expect(formatPriceMXN(0)).toBe('Gratis');
  });

  it('formats 199 with $ prefix and MXN suffix (no decimals)', () => {
    expect(formatPriceMXN(199)).toBe('$199 MXN');
  });

  it('formats large numbers with thousands separator', () => {
    const result = formatPriceMXN(1234567);
    expect(result).toContain('$');
    expect(result).toContain('MXN');
    // es-MX uses comma as thousands separator
    expect(result).toContain(',');
  });

  it('rounds decimals (maximumFractionDigits: 0)', () => {
    // 99.5 rounds to 100 with maximumFractionDigits:0
    expect(formatPriceMXN(99.5)).toBe('$100 MXN');
  });
});

describe('formatNumber', () => {
  it('formats 1234 with es-MX thousands separator', () => {
    const result = formatNumber(1234);
    // es-MX: comma as thousands separator
    expect(result).toBe('1,234');
  });

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0');
  });

  it('formats negative numbers', () => {
    expect(formatNumber(-500)).toBe('-500');
  });

  it('formats decimals with options', () => {
    const result = formatNumber(3.14, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    expect(result).toContain('3');
    expect(result).toContain('14');
  });
});
