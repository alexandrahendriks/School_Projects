const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
    { name: "A. Curry", profession: "frogman", age: 32 },
    { name: "F. Vonk", profession: "snake milker", age: 36 },
    { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];

  for (let person of array) {
    console.log("This is the whole person:", person);
    console.log("This is the name", person.name);
    console.log("This is the birth year:", (person.age - 2022)*(-1));
    console.log(person.name, "is a", person.profession)
    if (person.age > 50){
        console.log("You are above 50", person.name);
    }
  }