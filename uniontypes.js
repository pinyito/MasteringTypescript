/**Union types allow us to give a value a few different possible types. If the eventual value's type is included, Typescript will be happy.
* We can creat a union type by using the single | (pipe character) to separate the types we want to include. It is like saying, "This thing is allowed to be this, this, or this"
*/
var age = 24;
age = "12";
age = false;
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 76, long: 85 };
//Using a union type with functions
function printAge(age) {
    console.log("You are ".concat(age, " years old."));
}
printAge(23);
printAge("34");
//Literal Types - declaring a varibale and assigning it to a literal value
var zero = 0;
//zero = 1;//Will complain here
console.log(zero);
