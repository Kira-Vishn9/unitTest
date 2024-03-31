import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive

  it('it should return an array of even number', () => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrayNumberResult = validator.getEvenNumbersFromArray(arrayNumber);
    expect(arrayNumberResult).to.be.deep.eq([2, 4, 6, 8]);
  });

  it('it should return an array of even number', () => {
    const arrayNumber = [-2, -0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9990];
    const arrayNumberResult = validator.getEvenNumbersFromArray(arrayNumber);
    expect(arrayNumberResult).to.be.deep.eq([-2, -0, 0, 2, 4, 6, 8, 10, 9990]);
  });

  it('it should return an array of even number', () => {
    const arrayNumber = [-2, -0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 9990];
    const arrayNumberResult = validator.getEvenNumbersFromArray(arrayNumber);
    expect(arrayNumberResult)
        .to.have.all.members([-2, -0, 0, 2, 4, 6, 8, 10, 9990]);
  });

  it('it should return an empty array', () => {
    const emptyArrayResult = validator.getEvenNumbersFromArray([]);
    expect(emptyArrayResult).to.be.eql([]);
  });

  it('should return an array of even numbers for negative numbers', () => {
    const arrayNumber = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
    const arrayNumberResult = validator.getEvenNumbersFromArray(arrayNumber);
    expect(arrayNumberResult).to.be.deep.eq([-8, -6, -4, -2]);
  });

  it('should return an array of even numbers for decimal numbers', () => {
    const arrayNumber = [1.5, 2, 3.8, 4.3, 5.6];
    const arrayNumberResult = validator.getEvenNumbersFromArray(arrayNumber);
    expect(arrayNumberResult).to.be.deep.eq([2]);
  });

  it('should return an empty array when provided NaN and Infinity', () => {
    const arrayNumber = [NaN, Infinity];
    const arrayNumberResult = validator.getEvenNumbersFromArray(arrayNumber);
    expect(arrayNumberResult).to.eql([]);
  });

  // Negative

  it('should throw an error when provided string in array', () => {
    const arrayNumber = [1, '2', 3, 4, 5, 6, 7, 8, 9];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayNumber);
    }).to.throw(`[${arrayNumber}] is not an array of "Numbers"`);
  });

  it('should throw an error when provided mixed value in array', () => {
    const arrayNumber = [1, '2', 3, true, 5, 6, false, null, {value: 9}];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayNumber);
    }).to.throw(
        `[${arrayNumber}] is not an array of "Numbers"`,
    );
  });
});
