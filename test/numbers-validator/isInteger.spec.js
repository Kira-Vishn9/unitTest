import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive

  it('should return true if input is an integer', () => {
    const input = 42;
    expect(validator.isInteger(input)).to.be.true;
  });

  it('should return true if input is a negative integer', () => {
    const input = -42;
    expect(validator.isInteger(input)).to.be.true;
  });

  it('should return true if input is zero', () => {
    const input = 0;
    expect(validator.isInteger(input)).to.be.true;
  });

  it('should return true if input is -0', () => {
    const input = -0;
    expect(validator.isInteger(input)).to.be.true;
  });

  it('should return true for large integer', () => {
    const input = 9007199254740992;
    expect(validator.isInteger(input)).to.be.true;
  });

  // Negative

  it('should return false if input is a decimal number', () => {
    const input = 3.14;
    expect(validator.isInteger(input)).to.be.false;
  });

  it('should throw an error if input is an object', () => {
    const input = {value: 42};
    expect(() => validator.isInteger(input))
        .to.throw(Error, `[${input}] is not a number`);
  });

  it('should throw an error if input is an array', () => {
    const input = [42];
    expect(() => validator.isInteger(input))
        .to.throw(Error, `[${input}] is not a number`);
  });

  it('should throw an error if input is not a number', () => {
    const input = 'not a number';
    expect(() =>
      validator.isInteger(input)).to.throw(Error, `[${input}] is not a number`);
  });

  it('should return false if input is Infinity', () => {
    expect(validator.isInteger(Infinity)).to.be.false;
  });
});
