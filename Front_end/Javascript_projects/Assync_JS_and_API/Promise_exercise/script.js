console.log("Hey hello, I am the first.") 
setTimeout(function(){ console.log("Hey hello, I am the second."); }, 2000);
console.log("Hey hello, I am the third.")

function makeHomework (course, callback){
     setTimeout(() =>{
         console.log(`Okay, ok, I'm going to do my ${course} homework now`);
         callback();
     }, 2000);  
}

function doneWithHomework() {
     console.log("Look, Mom/Dad, I'm done with my homework!");
}

makeHomework("math", doneWithHomework);

//Promise exercise
const santaIsGenerous = false;

// Make a promise (so you don't have to learn this, this is on the API (back-end) side)
const willIGetANewIphone = new Promise(
     (resolve, reject) => {
          if (santaIsGenerous) {
              const smartphone = {
                  brand: 'Apple',
                  type: 'iPhone 11'
              };
              resolve(smartphone);
          } else {
              const withWhatReason = new Error("You've been naughty, no gifts for you");
              reject(withWhatReason);
          }

      }
  );

//Call Promise, or "consume" (you will do this and thus have to learn it, in contrast to creating above promise)
  const askSanta = () => {
      willIGetANewIphone
          .then(function (resolved) {
              // yay, you got a new Iphone
              console.log(resolved);
          })
          .catch(function (error) {
              // whoops, no present from Santa this year...
              console.log(error.message);
          });
  }

  askSanta();


/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if 
the value is less than or greater than the value 10. Log the result to the console.
*/

const testNum = (number) => {
    return new Promise((resolve, reject)=>{
        if (number > 10){
            resolve(number + " is greater than 10")
        } else {
            reject(number + " is less than 10")
        }
    })
};

testNum(8)
.then(result => console.log(result))
.catch(error => console.log(error));
testNum(11)
.then(result => console.log(result))
.catch(error => console.log(error));


/* Exercise 2:
Write two functions that use Promises that you can chain! The first function, 
makeAllCaps(), will take in an array of words and capitalize them, and then the 
second function, sortWords(), will sort the words in alphabetical order. If the array 
contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises */

const makeAllCaps = (array) => {
    return new Promise((resolve, reject)=> {
        if (array.every(word => {
            return typeof word === "string"
        })){
            resolve(sortWords(array.map(word => {
                return word.toUpperCase();
            })));
        } else {
            reject("Not a string");
        }
})
}
    
const sortWords = (words) => {
    return new Promise ((resolve, reject)=> {
        if(words){
            resolve(words.sort());
        } else {
            reject("Strings only!")
        }
    })
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
makeAllCaps(arrayOfWords)
.then (sortWords(arrayOfWords))
.then (result => console.log(result))
.catch(error => console.log(error));

const complicatedArray = ['cucumber', 44, true];

makeAllCaps(complicatedArray)
.then (sortWords(complicatedArray))
.then (result => console.log(result))
.catch(error => console.log(error));

// call both functions, chain them together and log the result to the console

let random = Math.floor((Math.random()*72)+1);

console.log(random)

// Rest and spread parameter operator exercise

//Rest
function sum(...numbers) {
    return numbers.reduce((current, prev)=> prev + current);
}

console.log(sum(25, 25, 25, 10, 5));

//Spread

function spread(num1, num2, num3, num4) {
    return num1 + num2+ num3 + num4;
}

let array = [25, 50, 100, 200];
console.log(spread(...array));


