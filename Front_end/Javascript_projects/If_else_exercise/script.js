const age = 18;
const isFemale = true;
const driverStatus = 'designated';
const firstName = ["Sarah" , "Bram"];
const totalAmount = 10;

if(age >= 18) {
    console.log('You can enter!');
    
} else {
    console.log('You can not enter!');
}
if(isFemale){
    console.log("You are a female!");
} else {
    console.log('You are not a female');
}

if(driverStatus === "drunk"){
    console.log("You are allowed to drive!");
} else {
    console.log('You are not allowed to drive!');
}

if(age >= 18 && age <= 25){
    console.log("You get 50% off!");
} else {
    console.log("You don't get a discount");
}

if(firstName === 'Sarah' || firstName === 'Bram'){
    console.log('You can have a free beer');
} else {
    console.log("You can't have a free beer");
}

if(totalAmount >= 100){
    console.log('You can have a free bottle of champagne');
}else if(totalAmount > 50) {
    console.log('You can get a portion of free nachos');
} else if(totalAmount > 25) {
    console.log('You can get free (veggie) bitterballen');
} else {
    console.log("Sorry you don't recieve anything");
}