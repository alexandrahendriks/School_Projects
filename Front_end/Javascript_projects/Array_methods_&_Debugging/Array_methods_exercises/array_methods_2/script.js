//Array methods part 1
const words = ["nice", "awesome", "amazing"];

const addTheWordCool = function(array){
    words.push(array);
}
const cool = addTheWordCool("cool");
console.log(words);
// result: ["nice", "awesome", "amazing", "cool"]

const elements = ['apples', 'pears', 'lemons'];

const amountOfElementsInArray = function(){
    console.log(elements.length);
}
amountOfElementsInArray();
// 3

const benelux = ["Belgium", "Netherlands", "Luxembourg"];
const selectBelgiumFromBenelux = function(){
    console.log(benelux[0]);
}
selectBelgiumFromBenelux();
// result: "Belgium" 


const lastelement = ["Hare", "Guinea pig", "Chicken", "Turtle"]

const lastElementInArray = function(){
    console.log(lastelement.slice(-1)[0]);
}
lastElementInArray();
// result: "Turtle"

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function() {
    console.log(presidents[0]);
    console.log(presidents.slice(1));
}
impeachTrumpSlice();

const impeachTrumpSplice = function() {
    console.log(presidents.splice(1, 3));
}
impeachTrumpSplice();

const strings = ['Winc', 'Academy', 'is', 'fun', ';-}'];

const stringsTogether = function(){
    console.log(strings.join(' '));
}
stringsTogether();

const myarray1 = [1,2,3];
const myarray2 = [4,5,6];

const combineArrays = function(){
    const myarray3 = myarray1.concat(myarray2);
    console.log(myarray3);
}
combineArrays();

//Array methods part 2 
//A
const superheroe = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = superheroe.find((element) => {
        return element.name === "Spiderman"  ;
    })
    console.log(findSpiderMan);
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B
const doubleArray = [1, 2, 3];

doubleArray.forEach((item) => {
    console.log(item * 2);
})
// result should be [2, 4, 6]

//C
const numbers = [1, 4, 3, 6, 9, 7, 11];

const containsNumberBiggerThan10 = numbers.some((item) =>{
    return item > 10
})
console.log(containsNumberBiggerThan10);
// result should be true

const numbers2 = [1,2,1,2,1,2];

const containsNumberBiggerThan = numbers2.some((item) =>{
    return item > 10
})
console.log(containsNumberBiggerThan);
// result should be false

//D
const country = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const includesItaly = country.includes("Italy")

console.log(includesItaly);
// result should be true

//E
const myNumbers = [1, 4, 3, 6, 9, 7, 11];

myNumbers.forEach((item) => {
   console.log(item*10);
})
// result should be [10, 40, 30, 60, 90, 70, 110]

//F
const below = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];

const isBelow100 = below.every((item) => {
    return item < 100
})

console.log(isBelow100);
// result should be: false

//G *bonus*
// result should be 1118
const sum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = sum.reduce((currentValue, value) => {
    return value + currentValue
}, 0)


console.log(bigSum);
// result should be 1118

//Superpowers exercise
const superheroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ]

    //1.
    const superheroName = superheroes.map((item) => {
        return item.name
    })
    console.log(superheroName);
   

    //2.
    const lessThan190 = superheroes.filter((item) => {
        return (item.weight < 190)
    })
    console.log(lessThan190);

    //3.
    const twoHunderd = superheroes.filter((item) => {
        return (item.weight == 200) 
    }).map((item) => {
        return item.name
    })
    console.log(twoHunderd);

    //4. 
    const firstAppearance = superheroes.map((item) => {
        return item.first_appearance
    })
    console.log(firstAppearance)

    //5. 
    const DC = superheroes.filter((item) => {
        return (item.publisher === "DC Comics")
    })
    console.log(DC);

    const marvel = superheroes.filter((item) => {
        return (item.publisher === "Marvel Comics")
    })
    console.log(marvel);

    //6. 
    const dcWeight = superheroes.filter((item) => {
        return (item.publisher == "DC Comics")
    }).map((i) => {
        return i.weight !== 'unknown' ? parseInt(i.weight, 10) : 0;
        })
    const sumWeightDC = dcWeight.reduce((b, a) => {
        return a + b
    }, 0)
    console.log(dcWeight)
    console.log(sumWeightDC)

    //7.
    const marvelWeight = superheroes.filter((item) => {
        return (item.publisher == "Marvel Comics")
    }).map((i) => {
        return i.weight !== 'unknown' ? parseInt(i.weight, 10) : 0;
        })

    const sumWeightMarvel = marvelWeight.reduce((b, a) => {
        return a + b 
    }, 0)
    console.log(marvelWeight)
    console.log(sumWeightMarvel)

    //8.
    const allHeroes = superheroes.map(hero => {
        const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
        hero.weight = weight;
        return hero;
      });
      const heaviestHero = allHeroes.reduce(
        (currentHeaviestHero, currentHero) => {
          if (currentHero.weight > currentHeaviestHero.weight) {
            return currentHero;
          } else {
            return currentHeaviestHero;
          }
        },
        allHeroes[0]
      );
      console.log("Heaviest her0000o:", heaviestHero);

    







