let a3 = 100;
setTimeout(function(){ a3++; console.log(a3)}, 0); 
console.log(a3);
setTimeout(function(){console.log(a3)}, 0)

let p = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve ("Yo!")
}, 0)
    
});

console.log(p)
setTimeout(function(){
    console.log(p);
}, 10);
console.log(p);
p.then(function(val){
    console.log(val);
})

//Callback function 
const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts(){
    setTimeout(function () /*or => */{
        let output = "";
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({title: "Post Three", body: "This is post three"}, getPosts);

//Promises
const postsS = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts(){
    setTimeout(function () /*or =>*/ {
        let output = "";
        postsS.forEach((post, index) =>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            postsS.push(post);

            const error = false;

            if(!error){
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
   
}

createPost({title: "Post three", body:"This is post three"})
     .then(getPosts)
     .catch(err => console.log(err));

//Promise.all
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, "GoodBye"));
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then(((values) => console.log(values)));


//Async - Await
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google') {
            resolve("Google says hi")
        } else {
            reject("We can only talk to Google")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject)=> {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest("Google").then(response => {
    console.log("Response received")
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

async function doWork(){
    try {
        const response = await makeRequest('Google')
        console.log("Response Received")
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}
doWork();
