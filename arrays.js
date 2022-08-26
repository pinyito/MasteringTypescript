/**Array Types */
//Arrays can be typed using a type annotation followed by empty array brackets, like numbr[] for an array of numbers
var activeUsers = []; // this defines activeUsers as an array of empty type - this would never accept any value in it
activeUsers.push("Eria"); // It complains
//Correct approach
var activeUsers1 = [];
activeUsers1.push("Jimmy");
activeUsers1.push(1); //Complains because obly string type values are allowed
var ages = [1];
ages.push(34);
console.log(ages[0]);
