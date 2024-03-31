import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.true;
  });

  it('should return true when provided with an even decimal number', () => {
    const validationResults = validator.isNumberEven(50);
    expect(validationResults).to.be.true;
  });

  it('should return true when provided with an even number more 100', () => {
    const validationResults = validator.isNumberEven(102);
    expect(validationResults).to.be.true;
  });

  it('should return true for large even number (1000000000000000)', () => {
    const validationResults = validator.isNumberEven(1000000000000000);
    expect(validationResults).to.be.true;
  });

  it('should return true for zero', () => {
    const validationResults = validator.isNumberEven(0);
    expect(validationResults).to.be.true;
  });

  it('should return true when provided with an even negative number', () => {
    const validationResults = validator.isNumberEven(-2);
    expect(validationResults).to.be.true;
  });

  it('should return true when provided with an even negative decimal number',
      () => {
        const validationResults = validator.isNumberEven(-20);
        expect(validationResults).to.be.true;
      });

  it('should return true when provided with an even negative number more 100',
      () => {
        const validationResults = validator.isNumberEven(-120);
        expect(validationResults).to.be.true;
      });

  it('should return true for even number in exponential notation (2e2)',
      () => {
        const validationResults = validator.isNumberEven(2e2);
        expect(validationResults).to.be.true;
      });

  it('should return true for odd number in exponential notation (3e3)',
      () => {
        const validationResults = validator.isNumberEven(3e3);
        expect(validationResults).to.be.true;
      });

  it('should return true for even number in exponential notation (2.5e2)',
      () => {
        const validationResults = validator.isNumberEven(2.5e2);
        expect(validationResults).to.be.true;
      });

  it('should return true for even number in exponential notation (3.5e3)',
      () => {
        const validationResults = validator.isNumberEven(3.5e3);
        expect(validationResults).to.be.true;
      });

  // Negative

  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.false;
  });

  it('should return false if an odd non-integer number is specified', () => {
    const validationResults = validator.isNumberEven(5.2);
    expect(validationResults).to.be.false;
  });

  it('should return false if an even non-integer number is specified', () => {
    const validationResults = validator.isNumberEven(4.4);
    expect(validationResults).to.be.false;
  });

  it('should throw an error when provided string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should return false for large odd number (1000000000000001)', () => {
    const validationResults = validator.isNumberEven(1000000000000001);
    expect(validationResults).to.be.false;
  });

  it('should return false for Infinity', () => {
    const validationResults = validator.isNumberEven(Infinity);
    expect(validationResults).to.be.false;
  });

  it('should return false for -Infinity', () => {
    const validationResults = validator.isNumberEven(-Infinity);
    expect(validationResults).to.be.false;
  });

  it('should throw an error when provided empty string', () => {
    expect(() => {
      validator.isNumberEven('');
    }).to.throw('[] is not of type "Number" it is of type "string"');
  });

  it('should throw an error when provided nothing', () => {
    expect(() => {
      validator.isNumberEven();
    }).to.throw(
        '[undefined] is not of type "Number" it is of type "undefined"',
    );
  });

  it('should throw an error when provided a boolean', () => {
    expect(() => {
      validator.isNumberEven(true);
    }).to.throw('[true] is not of type "Number" it is of type "boolean"');
  });

  it('should throw an error when provided an object', () => {
    expect(() => {
      validator.isNumberEven({value: 4});
    }).to.throw(
        '[[object Object]] is not of type "Number" it is of type "object"',
    );
  });

  it('should throw an error when provided a null', () => {
    expect(() => {
      validator.isNumberEven(null);
    }).to.throw(
        '[null] is not of type "Number" it is of type "object"',
    );
  });

  it('should throw an error when provided a undefined', () => {
    expect(() => {
      validator.isNumberEven(undefined);
    }).to.throw(
        '[undefined] is not of type "Number" it is of type "undefined"',
    );
  });

  it('should throw an error when provided a BigInt', () => {
    expect(() => {
      const bigIntValue = BigInt(10);
      validator.isNumberEven(bigIntValue);
    }).to.throw(
        `[10] is not of type "Number" it is of type "bigint"`,
    );
  });

  it('should throw an error when provided an array', () => {
    expect(() => {
      validator.isNumberEven([4, 5, 6]);
    }).to.throw('[4,5,6] is not of type "Number" it is of type "object"');
  });
});
