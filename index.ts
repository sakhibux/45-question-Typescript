// question 2 
// let myName: string = "sakhi";

// console .log(`Hello ${myName}, would you like to learn some type script today?`);

// quesion 3
// let myName: string = "sakhi";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName.charAt(0).toLocaleUpperCase() + myName.slice(1).toLocaleLowerCase());

// Quesion 4

// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// quesion 5
// let famous_person: string = "Albert Einstain";
// let message: string = `${famous_person} once said, "A person who never made a mistake never tried anything new."`

// console.log(message);

// quesion 6
// let myName: string = "\t\n sakhi \t\n";
// console.log(myName);
// console.log(myName.trim());

// Quesion 7
// console.log(5+3);
// console.log(10-2);
// console.log(9*2);
// console.log(16/2);

// Question 8
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);

// Question 9
// let favoriteNumber: number = 8;
// console.log(`My favorite number is ${favoriteNumber}. `);

// Quesion 10
// let myName: string = "sakhi";
// console.log(`Hello ${myName}, would you like to learn typscript today?`);

// Question 11
// let names: string[] = ["sakhi","Gulzar","Talib"];
// for (let i = 0; i < names.length; i++ ){
    // console.log(names[i]);
// }

// Quesion 12
// let names:  string[] = ["sakhi","Gulzar","Talib"];
// for (let name of names) {
    // console.log(`Hello ${name},would you like to learn some typescript today?`);
// }

// Quesion 13
// let transports: string[] = ["Honda", "car","bicycle"];
// transports.forEach(transport => {
    // console.log(`I would like to own a ${transport}.`);
// });

// Question 14
// let guests: string[] = ["sakhi","Abid","Javed"];
// guests.forEach(guest => {
    // console.log(`Dear ${guest}, would you like to join me to dinner?`);
// });

// Quesion 15
// let guests: string[] = ["sakhi","Abid","Javed"];
// guests.forEach(guest => {
    // console.log(`Dear ${guest}, would you like to join me to dinner?`);
// });

// let unableToAttend = "Javed";
// console.log(`${unableToAttend} can't make it to dinner.`);

// let newGuest = "Saira";
// guests[guests.indexOf(unableToAttend)] = newGuest;

// guests.forEach(guest => {
// console.log(`Dear ${guest},would you like to  join me for dinner? `);
// });

// Question 16
// let guests: string[] = ["sakhi", "Rahim", "Abid"];
// console.log("Great news! I found a bigger dinner table!");

// Adding more guests
// guests.unshift("Gulzar");
// guests.splice(guests.length / 2, 0, "Aslam");
// guests.push("Farooq");

// guests.forEach(guest => {
    // console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

// Question 17
// 
// let guests: string[] = ["Sakhi", "Rahim", "Abid"];
// console.log("Great news! I found a bigger dinner table!");

// Adding more guests
// guests.unshift("Gulzar");
// guests.splice(guests.length / 2, 0, "Aslam");
// guests.push("Farooq");

// guests.forEach(guest => {
    // console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });

// Q17 Answer:
// console.log("Unfortunately, I can only invite two people for dinner.");

// while (guests.length > 2) {
    // let removedGuest = guests.pop();
    // console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
// }

// guests.forEach(guest => {
    // console.log(`Dear ${guest}, you're still invited to dinner.`);
// });

// guests.splice(0, guests.length);
// console.log(guests); 

// Question 18
// let places: string[] = ["Turkey", "Nepal", "Japan", "india", "Pakistan"];

// console.log("Original order:", places);

// console.log("Alphabetical order:", [...places].sort());

// console.log("Original order:", places);

// console.log("Reverse alphabetical order:", [...places].sort().reverse());

// console.log("Original order:", places);

// places.reverse();
// console.log("Reversed order:", places);

// places.reverse();
// console.log("Original order:", places);

// places.sort();
// console.log("Alphabetical order:", places);

// places.reverse();
// console.log("Reverse alphabetical order:", places);

// Question 19

// let guests: string[] = ["Sadaf", "Saira", "Simra", "Rahim bux", "Saba"];
// console.log(`I am inviting ${guests.length} people to dinner.`);

// Quesion 20

// let countries: string[] = ["sri lanka", "Canada", "Bangladesh", "Iceland", "india"];
// console.log("Countries I'd like to visit:", countries);

// Quesion 21

// let book: { title: string; author: string; yearPublished: number } = {
    // title: "Typescript",
    // author: "Sakhi",
    // yearPublished: 1960
// };
// console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

// Quesion 22

// let friends: string[] = ["Alice", "Bob", "Charlie"];
// console.log(friends[3]); 
// friends[2] = "Charlie"; 

// Question 23

// let car = "subaru";

// console.log("Is car == 'subaru'? I predict true");
// console.log(car == "subaru");

// console.log("Is car == 'toyota'? I predict false");
// console.log(car == "toyota");

// Question 24
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("apple" == "apple"); // True
// console.log("apple" == "apple"); // False

// Using the lower case function
// console.log("Testing with lower case:");
// console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
// console.log("Numerical tests:");
// console.log(10 > 5); // True
// console.log(2 < 1); // False

// Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True

// Test whether an item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");


// Test whether an item is not in a array
// console.log("Is 'mango' not in fruits?");

// Question 25
// let alien_color = "green";
// if (alien_color == "green") {
    // console.log("You just earned 5 points!");

// }
// alien_color = "red";
// if (alien_color == "green") {
    // No output because the condition is false
// }

// Quesion 26
// Version that passes:
// let alien_color = "green";


// Version that runs the if block:
// alien_color = "green";
// if (alien_color == "green") {
//   console.log("You just earned 5 points for shooting the alien");
// } else {
//   console.log("You just earned 10 points");
// }

// Version that runs the else block:
// alien_color = "yellow";
// if (alien_color == "green") {
//   console.log("You just earned 5 points for shooting the alien!");
// } else {
//   console.log("You just earned 10 points!");
// }

// question 27

// let alien_color = "pink";

// Green alien version:
// alien_color = "green";
// if (alien_color == "green") {
//   console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//   console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//   console.log("You earned 15 points.");
// }

// Yellow alien version:
// alien_color = "yellow";
// if (alien_color == "green") {
//   console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//   console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//   console.log("You earned 15 points.");
// }

// Red alien version:
// alien_color = "red";
// if (alien_color == "green") {
//   console.log("You earned 5 points.");
// } else if (alien_color == "yellow") {
//   console.log("You earned 10 points.");
// } else if (alien_color == "red") {
//   console.log("You earned 15 points.");
// }

// export {} // To prevent errors from redeclaration

// quesion 28
// let age: number = 25;

// if (age < 2) {
    // console.log("The person is a baby.");
// } else if (age < 4) {
    // console.log("The person is a toddler.");
// } else if (age < 13) {
    // console.log("The person is a kid.");
// } else if (age < 20) {
    // console.log("The person is a teenager.");
// } else if (age < 65) {
    // console.log("The person is an adult.");
// } else {
    // console.log("The person is an elder.");
// }

// Quesion 29
// let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

// if (favorite_fruits.includes("bananas")) {
    // console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apples")) {
    // console.log("You really like apples!");
// }
// Continue with more fruits

// Question 30

// let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// usernames.forEach((username) => {
//   if (username == "admin") {
    // console.log("Hello admin, would you like to see a status report?");
//   } else {
    // console.log(`Hello ${username}, thank you for loggin in again.`);
//   }
// });

// Question 31

// let usernames: string[] = [];

// if (usernames.length === 0) {
    // console.log("We need to find some users!");
// } else {
    // Greet users
// }
// Removing all usernames ensures the message "We need to find some users!" is printed.

// Question 32

// let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

// new_users.forEach((newUser) => {
//   if (
    // current_users.some(
    //   (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    // )
//   ) {
    // console.log(`${newUser} will need to enter a new username.`);
//   } else {
    // console.log(`${newUser} is available.`);
//   }
// });

// Question 33

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((number) => {
//   let suffix = "th";
//   if (number === 1) {
    // suffix = "st";
//   } else if (number === 2) {
    // suffix = "nd";
//   } else if (number === 3) {
    // suffix = "rd";
//   }
//   console.log(`${number}${suffix}`);
// });

// Question 34

// let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

// pizzas.forEach(pizza => {
// console.log(`I like ${pizza} pizza.`);
// });
// console.log("I really love pizza!");

// Question 35

// let animals: string[] = ["dog", "cat", "rabbit"];

// animals.forEach((animal) => {
//   console.log(`A ${animal} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");

// Question 36

// function make_shirt(size: string, message: string) {
    // console.log(
    //   `Making a ${size} t-shirt with the message "${message}" printed on it`
    // );
//   }
  
//   make_shirt("medium", "Code is Life");

// Question 37

// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    // console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
    // }
    
    // make_shirt(); 
    // make_shirt("medium"); 
    // make_shirt("small", "Dive into Coding"); 

    // Question 38
    
// function describe_city(city: string, country: string = "Pakistan") {
    // console.log(`${city} is in ${country}.`);
// }

// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Tokyo", "Japan");

// Question 39

// function city_country(city: string, country: string): string {
    // return `${city}, ${country}`;
//   }
  
//   console.log(city_country("Lahore", "Pakistan"));
//   console.log(city_country("Tokyo", "Japan"));
//   console.log(city_country("Paris", "France"));

// Question 40
// function make_album(artist: string, title: string, tracks?: number) {
    // let album = { artist, title };
    // if (tracks) {
    //   album["tracks"] = tracks;
    // }
    // return album;
//   }
  
//   console.log(make_album("Artist One", "The First Album"));
//   console.log(make_album("Artist Two", "The Second Album"));
//   console.log(make_album("Artist Three", "The Third Album", 12));

// Question 41

// let magicians: string[] = ["sakhi", "Abid", "Yasir"];

// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
    // console.log(magician);
//   });
// }

// show_magicians(magicians);

// Question 42

// let magicians: string[] = ["Sakhi", "Abid", "yasir"];

// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
    // console.log(magician);
//   });
// }

// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
    // magicians[i] = magicians[i] + " the Great";
//   }
// }

// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names

// Question 43
// let magicians: string[] = ["Sadaf", "sakhi", "saira"];

// function make_great(magicians: string[]): string[] {
//   let greatMagicians = [];
//   magicians.forEach((magician) => {
    // greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }

// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
    // console.log(magician);
//   });
// }

// let greatMagicians = make_great(magicians.slice()); 
// console.log("Original magicians:");
// show_magicians(magicians); 
// console.log("Great magicians:");
// show_magicians(greatMagicians); 

// Question 44

// function make_sandwich(...items: string[]) {
    // console.log(`Making a sandwich with: ${items.join(", ")}.`);
//   }
  
//   make_sandwich("ham", "cheese");
//   make_sandwich("turkey", "lettuce", "tomato");
//   make_sandwich("avocado", "sprouts", "mustard", "mayo");

// Question 45

// function make_car(
    // manufacturer: string,
    // model: string,
    // ...options: [string, any][]
//   ) {
    // let car = { manufacturer, model };
    // options.forEach(([key, value]) => (car[key] = value));
    // return car;
//   }
  
//   console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
//   console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
  
  


  


  





