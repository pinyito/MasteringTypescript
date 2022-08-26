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