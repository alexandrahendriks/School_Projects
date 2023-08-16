
//1.Write a JavaScript function that reverse a number
const rev = function(number){
    number = number + "";
    return  number.split("").reverse().join("");  
}

const reve = rev(25);
console.log(reve);
console.log(typeof reve);


//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
const checkPalindrome = function(w){
        let checkw = w.toLowerCase().replace(/\W/g,'');
        let checkcount = 0;
        if (w==="") {
            console.log("Nothing found!");
            return false;
        }
        if ((checkw.length) % 2 == 0){
            checkcount = (checkw.length) / 2;
        } else {
            if (checkw.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
        } else {
            checkcount = (checkw.length - 1) / 2;
        }
    } for (var x = 0; x < checkcount; x++) {
                if (checkw[x] != checkw.slice(-1-x)[0]) {
                    console.log("Entry is not a palindrome.");
                    return false;
                }
            }
            console.log("The entry is a palindrome.");
            return true;
}

//Solution 2
const checkPalindrome2 = function (word) {
    word = word.replace(/\W/g, '')
    word = word.toLowerCase();
    for (i=0; i < word.length; i+=1){
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const eye = checkPalindrome('Eye Hello there!');
const sun = checkPalindrome('sun');
console.log(eye);
console.log(sun); 


//3. Write a JavaScript function that generates all combinations of a string.
 const generateCombination = function(w){
    const thisIsAnArray = Array.from(w);
    console.log(thisIsAnArray);
    for (i=0, j=1; i < thisIsAnArray.length; i++, j++){
        thisIsAnArray[i]= w.substring(i, j);
        }

    }

const result = generateCombination('dog');
console.log(result);

function substrings(w)
{
let array1 = [];
  for (x = 0, y=1; x < w.length; x++,y++) 
  {
   array1[x]=w.substring(x, y);
    }
let combi = [];
let temp= "";
let slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");


