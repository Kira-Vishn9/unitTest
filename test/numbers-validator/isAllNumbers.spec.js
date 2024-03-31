import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive

  it('should return true when provided array with number', () => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrayNumberResult = validator.isAllNumbers(arrayNumber);
    expect(arrayNumberResult).to.be.true;
  });

  it('should return true when provided an empty array', () => {
    const emptyArray = [];
    const result = validator.isAllNumbers(emptyArray);
    expect(result).to.be.true;
  });

  it('should return true when provided an array with empty elements', () => {
    const arrayWithEmptyElements = [1, 2, , 4, 5];
    const result = validator.isAllNumbers(arrayWithEmptyElements);
    expect(result).to.be.true;
  });

  it('should return true when provided an array with zero elements', () => {
    const arrayWithZeroElements = [1, 2, 0, 4, 5];
    const result = validator.isAllNumbers(arrayWithZeroElements);
    expect(result).to.be.true;
  });

  it('should return true when provided an array with negative numbers', () => {
    const arrayNegativeNumbers = [-1, -2, -3, -4, -5];
    const result = validator.isAllNumbers(arrayNegativeNumbers);
    expect(result).to.be.true;
  });

  it('should return true when provided an array with decimal numbers', () => {
    const arrayDecimalNumbers = [1.5, 2.7, 3.8, 4.1, 5.9];
    const result = validator.isAllNumbers(arrayDecimalNumbers);
    expect(result).to.be.true;
  });

  // Negative

  it('should return false when provided an array with mixed data types', () => {
    const mixedArray = [1, '2', 3, 4, true];
    const result = validator.isAllNumbers(mixedArray);
    expect(result).to.be.false;
  });

  it('should throw an error when provided null', () => {
    expect(() =>
      validator.isAllNumbers(null)).to.throw('[null] is not an array');
  });

  it('should throw an error when provided boolean', () => {
    expect(() =>
      validator.isAllNumbers(true)).to.throw('[true] is not an array');
  });

  it('should throw an error when provided undefined', () => {
    expect(() =>
      validator.isAllNumbers(undefined))
        .to.throw('[undefined] is not an array');
  });

  it('should throw an error when provided object', () => {
    const emptyObject = {};
    expect(() =>
      validator.isAllNumbers(emptyObject))
        .to.throw('[[object Object]] is not an array');
  });

  it('should throw an error when provided string', () => {
    const arrayNumber = '2';
    expect(() =>
      validator.isAllNumbers(arrayNumber))
        .to.throw(`[${arrayNumber}] is not an array`);
  });

  it('should throw an error when provided nothing', () => {
    expect(() =>
      validator.isAllNumbers()).to.throw('[undefined] is not an array');
  });
});
