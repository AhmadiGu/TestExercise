// describe('my beverage', () => {
//     test('is delicious', () => {
//       expect(myBeverage.delicious).toBeTruthy();
//     });

const Calculator = require("./calculator")

  
//     test('is not sour', () => {
//       expect(myBeverage.sour).toBeFalsy();
//     });
//   });

describe('add of numbers', () => {
    const calc = new Calculator();
    test('add of 2+5 is 7' , () => {
    expect(calc.add(2,5)).toBe(7);
  });

  test('add of 2+10 is 12' , () => {
    expect(calc.add(2,10)).toBe(12);
  });

  test('add of 3+6 is 9' , () => {
    expect(calc.add(3,6)).toBe(9);
  });
});

describe('subtract of numbers', () => {
    const calc = new Calculator();
    test('subtract of 5-2 is 3' , () => {
    expect(calc.subtract(5,2)).toBe(3);
  });

  test('subtract of 10-2 is 8' , () => {
    expect(calc.subtract(10,2)).toBe(8);
  });

  test('subtract of 6-3 is 3' , () => {
    expect(calc.subtract(6,3)).toBe(3);
  });
});

describe('multiply of numbers', () => {
    const calc = new Calculator();
    test('multiply of 5*2 is 10' , () => {
    expect(calc.multiply(5,2)).toBe(10);
  });

  test('multiply of 10*2 is 20' , () => {
    expect(calc.multiply(10,2)).toBe(20);
  });

  test('multiply of 6*3 is 18' , () => {
    expect(calc.multiply(6,3)).toBe(18);
  });
});

describe('divide of numbers', () => {
    const calc = new Calculator();
    test('divide of 5/2 is 2' , () => {
    expect(calc.divide(5,2)).toBe(2.5);
  });

  test('divide of 10/2 is 5' , () => {
    expect(calc.divide(10,2)).toBe(5);
  });

  test('divide of 6/3 is 2' , () => {
    expect(calc.divide(6,3)).toBe(2);
  });
});