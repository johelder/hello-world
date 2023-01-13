import { reverseString } from './reverseString';

describe('Reverse function', () => {
  it('should return true or false if a word is a palindrome string', () => {
    expect(reverseString('ttests')).toBe(false);
  });

  it('should return true or false if a word is a palindrome string even it contains blanks space', () => {
    expect(reverseString('Arara Arara')).toBe(true);
  });
});
