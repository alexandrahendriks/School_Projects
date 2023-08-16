const fizzbuzz = require("./fizzbuzz");

describe("Creating function", () => {
    test("Should be a number", () => {
        expect(() => fizzbuzz()).toThrow();
        expect(() => fizzbuzz({})).toThrow();
        expect(() => fizzbuzz('fizz')).toThrow();
    });
    test("Divisible by 3", () => {
        expect(fizzbuzz(12)).toBe('Fizz');
    });
    test("Divisible by 5", () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    }); 
    test("Divisible by 3 and 5", () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });
    test("Return the number", () => {
        expect(fizzbuzz(8)).toBe(8);
    });
})