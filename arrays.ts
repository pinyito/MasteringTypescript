/**Array Types */
//Arrays can be typed using a type annotation followed by empty array brackets, like numbr[] for an array of numbers
const activeUsers: [] = []; // this defines activeUsers as an array of empty type - this would never accept any value in it
activeUsers.push("Eria"); // It complains

//Correct approach
const activeUsers1: string[] = [];
activeUsers1.push("Jimmy");
activeUsers1.push(1); //Complains because obly string type values are allowed

const ages: number[] = [1];
ages.push(34);
console.log(ages[0]);

//We caould declare typed arrays usign angle brackets besides the approach above
const bools: Array<boolean> = [];
bools.push(false);

const gameBoard: string[][] = [];

//Type Narrowing


//***The reason we need union types with arrays */
const mixedArray: any[] = []; // this will be an array of any type, but the concept below limits the number of types mixed up
//Union Types and Arrays
const stuff: (number | string)[] = []; // this will be an array of a mixture of numbers and strings
const stuff1: number | string[] = []; // this will be an array of either numbers only or strings only

stuff.push(1);
stuff.push("Word");

stuff1.push(2); //We can see it complain at this point beacuse we added another item of a different type
stuff1.push("5");