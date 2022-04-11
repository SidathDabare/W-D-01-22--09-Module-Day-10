/*
ASSIGNMENT RULES
– All the answers must be written in JavaScript
– You can ask for help, reach the Teaching Assistants if needed
– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet
– You can test your code in a separate file or de-commenting the single exercises in this one.
– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.
– Complete as many exercises as you can
*/
function printTitle(title) {
  console.log(`\n<--===========[[[[ ${title} ]]]===========-->\n`);
}

// JS Basics
printTitle("EXERCISE A");
/* EXERCISE A
Create a variable called test and assign a string value to it.
*/
let test = "Strive";
console.log(test);
//-----------------------------------------------------------------------------

printTitle("EXERCISE B");
/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the 
numbers 10 and 20.
*/
let sum = 10 + 20;
console.log(sum);

//--------------------------------------------------------------------------------
printTitle("EXERCISE C");
/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 
(it should be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
//-------------------------------------------------------------------------------

printTitle("EXERCISE D");
/* EXERCISE D
Create a variable called me and assign to it an object containing the following 
information: name = your name, surname = your surname, age = your age.
*/
let me = {
  name: "Sidath",
  surName: "Dabare",
  age: 38,
};
console.log(me);

//-------------------------------------------------------------------------------------------
printTitle("EXERCISE E");
/* EXERCISE E
Write a piece of code for programmatically removing the age property from the 
previously create object.
*/
delete me.age;
console.log(me);
//---------------------------------------------------------------------------------------------

printTitle("EXERCISE F");
/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined 
before an array called skills, containing the programming languages you know right now.
*/

me.skills = ["html", "css", "javascript"];
console.log(me);
//--------------------------------------------------------------------------------------------

printTitle("EXERCISE G");
/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the 
skills array inside the me object.
*/
me.skills.splice(-1, 1);
console.log(me);
//--------------------------------------------------------------------------------------------

// JS Functions
printTitle("EXERCISE 1");
/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/
function dice(n) {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());
//----------------------------------------------------------------------------------------------

printTitle("EXERCISE 2");
/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and 
returns the biggest one.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(whoIsBigger(20, 9) + " is a bigger number");
//----------------------------------------------------------------------------------------------------
printTitle("EXERCISE 3");
/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns 
an array with every word in that string.
Ex.: splitMe(“I love coding”) => returns [“I”, “Love”, “Coding”]
*/
function splitMe(str) {
  let myArray = [];
  let myString = str.split(/(\s+)/).filter((e) => e.trim().length > 0);
  myArray.push(myString);
  console.log(myArray);
}
splitMe("is a bigger number");
//---------------------------------------------------------------------------------------------------------
printTitle("EXERCISE 4");
/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, 
otherwise it should remove the last one from it.
*/
function deleteOne(str, bol) {
  if (bol === true) {
    //console.log(str);
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
console.log(deleteOne("Strive", false));
//------------------------------------------------------------------------------------------------

printTitle("EXERCISE 5");
/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns 
it removing all the digits.
Ex.: onlyLetters(“I have 4 dogs”) => returns “I have dogs”
*/
function onlyLetters(str) {
  //return str.replace(/[^a-zA-Z]/g, " ");
  //return str.replace(/[0-9]/g, "");
  return str.replace(/\d+/g, "");
}
console.log(onlyLetters("I have 4 dogs"));
//---------------------------------------------------------------------------------

printTitle("EXERCISE 6");
/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns
 true if the string is a valid email address.
*/
function isThisAnEmail(str) {
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (str.match(validEmail)) {
    return true + " --> " + str + " Is a valid email";
  } else {
    return false + " --> " + str + " Not a valid email";
  }
}
let emailAdress = "admin@email.com";
console.log(isThisAnEmail(emailAdress));

//-----------------------------------------------------------------------------------------
printTitle("EXERCISE 7");
/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/
// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// function whatDayIsIt(day) {
//   //const d = new Date();
//   //console.log(d);
//   return weekday[day - 1];
// }
// console.log(whatDayIsIt(7));

// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

function whatDayIsIt(day) {
  //today = new Date().getDay();
  switch (day) {
    case 0:
      console.log("It is a Sunday.");
      break;
    case 1:
      console.log("It is a Monday.");
      break;
    case 2:
      console.log("It is a Tuesday.");
      break;
    case 3:
      console.log("It is a Wednesday.");
      break;
    case 4:
      console.log("It is a Thursday.");
      break;
    case 5:
      console.log("It is a Friday.");
      break;
    case 6:
      console.log("It is a Saturday.");
      break;
      s;
    default:
      console.log("No such day exists!");
      break;
  }
  return day;
}
whatDayIsIt(6);

//-----------------------------------------------------------------------------------------
printTitle("EXERCISE 8");
/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/

function rollTheDices(num) {
  let arrayOfRandom = [];
  for (let i = 0; i < num; i++) {
    let randomNumber = Math.ceil(Math.random() * 6);
    arrayOfRandom.push(randomNumber);
  }
  console.log(arrayOfRandom);
  //const sum = arrayOfRandom.reduce((a, b) => a + b, 0);

  const sum = arrayOfRandom.reduce(add, 0);
  function add(accumulator, a) {
    return accumulator + a;
  }

  console.log(sum);
}
rollTheDices(10);

//-----------------------------------------------------------------------------------------
printTitle("EXERCISE 9");
/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns 
the number of days passed since that date.
*/
function howManyDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = endDate.getTime() - startDate.getTime();
  console.log(diffInTime);

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);
  console.log(diffInDays + " days");

  return diffInDays;
}
// Datae format ---  month/days/year
console.log(howManyDays("1/31/2022", "2/7/2022"));

//-------------------------------------------------------------------------------------------
printTitle("EXERCISE 10");
/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your
 birthday, false otherwise.
*/

function isTodayMyBirthday(dob) {
  let today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };
  console.log(today);
  console.log(dob);

  if (today.month == dob.month && today.date == dob.date) {
    return true + " Today is your b'day";
  } else {
    return false + " Have a good day";
  }
}
console.log(isTodayMyBirthday({ year: 2022, month: 4, date: 10 }));
//Date format ---  month/days/year
// console.log(isTodayMyBirthday({ year: 2022, month: 4, date: 10 }));

//-------------------------------------------------------
// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file
printTitle("EXERCISE 11");
/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/
function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

console.log(deleteProp({ name: "jack", age: 12 }, "name"));
console.log(deleteProp({ name: "jack", age: 12 }, "age"));

//----------------------------------------------------------------------------------------------
printTitle("EXERCISE 12");

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided 
movies array.
*/

function oldestMovie() {
  let Oldest = parseInt(movies[0].Year);
  let Temp = parseInt(0);
  let OldestMovie;
  for (let index = 1; index < movies.length; index++) {
    Temp = movies[index].Year;
    if (Temp < Oldest) {
      Oldest = Temp;
    }
  }
  for (index = 0; index < movies.length; index++) {
    if (movies[index].Year === Oldest) {
      OldestMovie = movies[index].Title;
    }
  }
  console.log(
    "Oldest movie in movies array is from ",
    Oldest,
    "and it is",
    OldestMovie
  );
}
oldestMovie();
//---------------------------------------------------------------------------------------
printTitle("EXERCISE 13");
/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained in 
the provided movies array.
*/
function countMovies(count) {
  return parseInt(movies.length);
}
console.log(countMovies());

//-----------------------------------------------------
printTitle("EXERCISE 14");
/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of 
the movies contained in the provided movies array.
*/

function onlyTheTitles() {
  let onlyTitles = [];
  for (index = 0; index < movies.length; index++) {
    movieTitle = movies[index].Title;
    onlyTitles.push(movieTitle);
  }
  console.log(onlyTitles);
}
onlyTheTitles();
//-------------------------------------------------------------------------------------
printTitle("EXERCISE 15");
/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced 
in this millennium from the provided movies array.
*/
function onlyInThisMillennium() {
  for (let index = 1; index < movies.length; index++) {
    millenium = movies[index].Year >= 2000;
    //console.log(millenium);
    if (millenium === true) {
      console.log(movies[index].Title + " year " + movies[index].Year);
    }
  }
}
onlyInThisMillennium();
//-------------------------------------------------------------------------------------
printTitle("EXERCISE 16");
/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns 
the movie with the given id from the provided movies array.
*/
function getMovieById(id) {
  for (let index = 0; index < movies.length; index++) {
    if (movies[index].imdbID === id) {
      return movies[index].imdbID + " " + movies[index].Title;
    }
  }
}
console.log(getMovieById("tt4154796"));
console.log(getMovieById("tt2395427"));
console.log(getMovieById("tt0355702"));
//--------------------------------------------------------------------------------------
printTitle("EXERCISE 17");
/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which
 the movies in the provided movies array have been produced.
*/
function sumAllTheYears(sum) {
  sum = movies.reduce(function (a, b) {
    return { Year: parseInt(a.Year) + parseInt(b.Year) };
  });
  console.log(sum);
}
console.log(sumAllTheYears());

//----------------------------------------------------------------------------------------
printTitle("EXERCISE 18");
/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and 
returns all the movies in the provided movies array which contain that string in the title.
*/
function searchByTitle(str) {
  for (let index = 0; index < movies.length; index++) {
    if (JSON.stringify(movies[index].Title) === JSON.stringify(str)) {
      return movies[index].Title;
    }
  }
}
console.log(searchByTitle("Avengers: Endgame"));

//--------------------------------------------------------------------------------------------
//printTitle("EXERCISE 19");
/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided 
movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/

//-----------------------------------------------------------------------------------------------
printTitle("EXERCISE 20");
/* EXERCISE 20
Write a function called “removeIndex” which receives a number as a parameter and returns the
 provided movies array without the element in the given position.
*/
function removeIndex(a) {
  return (a = movies.slice());
}
console.log(removeIndex(0, 1));
//console.log(movies);
//----------------------------------------------------------------------------------------------
// [EXTRAS] JS Advanced
printTitle("EXERCISE 21");
/* EXERCISE 21
Create a function called “halfTree” which receives a number as a parameter and builds 
an “*” half tree with the given height.
Example:
halfTree(3)
*
**
***
*/

function halfTree(h) {
  let i = 0,
    j = 1;
  w = h * 2 - 1;
  let space = parseInt(w / 2);
  while (space >= 0) {
    let str = "";
    for (i = 0; i < space; i++) str += "";
    for (i = 0; i < j; i++) str += "*";
    console.log(str);
    // Since every next line got 2 more *
    j += 1;
    // Number of space reduce by 1
    space--;
  }
}
halfTree(3);
//------------------------------------------------------

printTitle("EXERCISE 22");
/* EXERCISE 22
Create a function called “tree” which receives a number as a parameter and builds an “*” 
tree with the given height.
Example:
tree(3)
*
***
*****
*/
function tree(x) {
  let tree = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x + x - 1; j++) {
      if (j <= x - i || j >= x + i) {
        tree += "";
      } else {
        tree += "*";
      }
    }
    tree += "\n";
  }
  console.log(tree);
  return tree;
}

tree(3);

/* EXERCISE 23
Create a function called “isItPrime” that receives a number as a parameter and returns true 
if the given number is a prime number.
*/

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository; then post the link of your 
commit on the Homework section of today’s Eduflow.
*/
