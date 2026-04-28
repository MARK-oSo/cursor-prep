import { describe, it, expect } from 'vitest';
import { cn } from '../../src/lib/cn';

describe('cn', () => {
  it('merges simple strings', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('handles conditionals (falsy values excluded)', () => {
    const condition = false;
    expect(cn('a', condition && 'b', 'c')).toBe('a c');
  });

  it('resolves tailwind conflicts (last one wins)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles arrays and undefined', () => {
    expect(cn(['a', undefined, 'b'])).toBe('a b');
  });
});
