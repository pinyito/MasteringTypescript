 /**Union types allow us to give a value a few different possible types. If the eventual value's type is included, Typescript will be happy.
 * We can creat a union type by using the single | (pipe character) to separate the types we want to include. It is like saying, "This thing is allowed to be this, this, or this"
 */
let age: number | string | boolean = 24;
age = "12";
age = false;

//We are not limted to primitive types only, but can also have object types
type CoordPoint = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
}

let coordinates: CoordPoint | Loc = {x: 1, y: 34};
coordinates = {lat: 76, long: 85};

//Using a union type with functions
function printAge(age: number | string): void{
    console.log(`You are ${age} years old.`);
}

printAge(23);
printAge("34");

//Literal Types - declaring a varibale and assigning it to a literal value
let zero: 0 = 0;
zero = 1; //Complains
//let varaible: literal_value

let mood: "Happy" | "Sad";
mood = "Happy";
mood = "angry"; //Compplains

type DayOfWeek = 
    | "Monday"
    | "Tuesday"
    | "Wenesday"
    | "Thursday"
    | "Friday"; //unionType helps us to combine lieral types

let today: DayOfWeek = "Thursday";
today = "Wed";//Will complain.

//Exercise
//1. Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;
highScore = 1;
highScore = true;

//2. Create an array called stuffArr
//it can be an array of numbers or strings, but not both
let stuffArr: number[ ] | string[] = [];

//3. Create literal type called SkillLevel
//It allows 4 values; Beginner, Intermediate, Advanced, and Expert
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
 
//4. Create a type called SkiSchoolStudent
//name must string, age number, sport "ski" or "snowboard", and level SkillLeve
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
};

//5. Define a type to represent an RGB number
//r, g, b should be number
type RGB = {
    r: number;
    g: number;
    b: number;
};

//6. Define a type to represent an HSL color
///h, s, l should be number
type HSL = {
    h: number;
    s: number;
    l: number;
};

//7. Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: (RGB | HSL)[] = [];

//8. Write a function called greet that accepts a single string OR an array of strings
//It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (person: string | string[]): void => {
    if(typeof person === "string"){
        console.log(`Hello, ${person}`);
    }else{
        for(let p of person){
            console.log(`Hello, ${p}`);
        }
    }
};
