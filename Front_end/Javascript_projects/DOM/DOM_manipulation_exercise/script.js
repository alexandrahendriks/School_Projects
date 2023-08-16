//Part 1
let buttons = document.getElementById("big-five-list").getElementsByTagName("button");
const myArray = Array.from(buttons);

const loopButtos = myArray.forEach(element => {
    element.addEventListener("click", onCLick)
    function onCLick() {
        console.log(element.value);
        spotted.appendChild(newLi);
        newLi.innerHTML = element.value;
    }
}); 

let newLi = document.createElement("li"); 
let spotted = document.getElementById("spotted-animals-list");

spotted.appendChild(newLi);

//Part2
let parent = document.getElementById("spotted-animals-list");
let firstChild = parent.getElementsByTagName("li");

const removeTheFirst = function () {
    let remove = document.getElementById("remove-first-item-button");
    //console.log(remove);
    remove.addEventListener("click", function oncLick() {
        console.log('hi');
        parent.removeChild(firstChild[0]);
    }) 
}; 
removeTheFirst();

//Part3

const removeAll = function () {
    let removeAllButton = document.getElementById("remove-all-button");
    //console.log(remove);
    removeAllButton.addEventListener("click", function oncLick() {
        parent.innerHTML = "";
    }) 
}; 
removeAll();




