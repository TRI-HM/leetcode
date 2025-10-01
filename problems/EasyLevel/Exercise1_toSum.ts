/**
 * Finds two indices in the array whose values sum up to the target.
 * Returns a tuple of indices if such a pair exists, otherwise returns null.
 *
 * @param numbers - Array of numbers to search.
 * @param target - The target sum to find.
 * @returns A tuple of indices [i, j] or null if no such pair exists.
 */
function twoSum(numbers: number[], target: number): [number, number] | null {
  const numMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(numbers[i], i);
  }
  return null;
}
export { twoSum };

// Example usage:
const numbers = [2, 7, 11, 15];
const target = 9;
const result = twoSum(numbers, target);
console.log(result); // Output: [0, 1]