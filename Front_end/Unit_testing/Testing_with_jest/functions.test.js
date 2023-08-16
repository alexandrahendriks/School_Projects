const {functions, addOne, getWordLengths, findNeedle} = require("./functions.js")
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2,2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2,2)).not.toBe(5);
});

 test('Should be null', () => {
    // Start with expect()
    // Inside the first brackets put what you want to test. That will be a function.
    // Then follows your .toBeSomethingSomething function,
    // find the appropriate function in the documentation.
    // In this case we want to check if the function "isNull()" actually
    // returned null. So "toBeNull()" makes the most sense
    expect(functions.isNull(null)).toBeNull();
});
 
test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    });
}); 

// Tests are really just functions. To demonstrate that, 
// we now let you create tests that work without outside input:

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    // expect(load1 + load2).toBe.....
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    //  expect('team').not.to..........;
    expect("team").not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    // expect(usernames).to......
    expect(usernames).toContain("admin")
});

  test("Add 1 to each item in myArray", function() {
      const myArray = [31, 57, 12, 5];

      const unchanged = [31, 57, 12, 5];
      const expected = [32, 58, 13, 6];
      const output = addOne(myArray);

      expect(output).toEqual(expected);
      expect(myArray).toEqual(unchanged);
    }); 

    test("Get word lengths", function() {
      const words = ["sun", "potato", "roundabout", "pizza"];
      const expected = [3, 6, 10, 5];

      const output = getWordLengths(words);
      expect(output).toEqual(expected);
    });

    test("Find the needle", function() {
      const words = ["house", "train", "slide", "needle", "book"];
      const expected = 3;

      const output = findNeedle(words, "needle");
      expect(output).toEqual(expected);
    });  