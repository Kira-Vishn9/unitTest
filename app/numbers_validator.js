/**
 * Class for validation even number
 */
export default class NumbersValidator {
  /**
   * Checks if the given number is even.
   * @param {number} number The number to check.
   * @return {boolean} True if the number is even, false otherwise.
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      throw new Error(
          `
          [${number}] is not of type "Number" it is of type "${typeOfVariable}"
          `,
      );
    } else {
      return number % 2 === 0;
    }
  }

  /**
   * Returns an array of even numbers from the given array of numbers.
   * @param {Array<number>} arrayOfNumbers The array of numbers to go through.
   * @return {Array<number>} An array of even numbers.
   */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
        arrayOfNumbers.every((item) => typeof item === 'number')) {
      return arrayOfNumbers.filter(this.isNumberEven);
    }
    throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
  }

  /**
   * Checks if all elements in the given array are numbers.
   * @param {Array<number>} arrayOfNumbers The array of numbers to go through.
   * @return {boolean} True if all elements are numbers, false otherwise.
   */
  isAllNumbers(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array`);
    }
    return arrayOfNumbers.every((n) => typeof n === 'number');
  }

  /**
   * Check if the passed value is an integer.
   * @param {number} n The value to check.
   * @return {boolean} True if the value is an integer, false otherwise.
   */
  isInteger(n) {
    if (typeof n !== 'number') {
      throw new Error(`[${n}] is not a number`);
    }
    return Number.isInteger(n);
  }
}
