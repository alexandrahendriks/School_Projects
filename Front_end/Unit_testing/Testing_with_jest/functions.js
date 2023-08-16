const functions = {
  add:(num1, num2) => num1 + num2,
  isNull: function() {
    return null;
  },
  checkValue: function(x) {
    return x;
  },
  createUser: function() {
    const user = { 
      firstName: 'Brad' 
    };
    user['lastName'] = 'Traversy';
    return user;
    }
};

//Exercise: Testing with Test Driven Development (TDD)

const addOne = function(numbers) {
    // Write the function here...
       return numbers.map(number => number +1 );
    }


const getWordLengths = function(someWords) {
    //Write your function...
    return someWords.map(words => words.length)
};

const findNeedle = function(words, wordToBeFound) {
    // Write the function here...
    return words.indexOf(wordToBeFound);
  };

module.exports = {
    functions,
    addOne,
    getWordLengths,
    findNeedle
}