
/**Object Types */
//Function accepting object type as a parameter and return void
function printName(person: {first: string, last: string}): void{
    console.log(`${person.first} ${person.last}`);
};
printName({first: "Thomas", last: "Jenkins"});

//A varibale takes an object type as a value
//Assuming we want to represent some coordinate of a sort - variable: type_definiton = value_assignment(object)
let coordinate: {x: number; y: number} = {x: 32, y: 12};
console.log(coordinate);
console.log(coordinate.x);

//A function returns an object type
function randomCoordinate(): {x: number; y: number} {
    return {x: Math.random(), y: Math.random()};
};

const c = randomCoordinate();
console.log(c);
console.log(c.x);
console.log(c.y);

//Excess Properties

//Type Alias - commonly used with object types

//Nested objects
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {producer: string; writer: string;};
};

function calculatePayout(song: Song): number{
    return (song.numStreams * 0.003);
}

function printSong(song: Song): void{
    console.log(song.title);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1238763,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};

console.log(mySong);
console.log(calculatePayout(mySong));
printSong(mySong);

//Optional Properties - Use a question mark '?' placed before the property name in the object declaration

//The Readonly modifier - Make object properties readonly so that we can not write new values to  them
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 1892,
    username: "eliot"
}

console.log(user.id);
//user.id = 367; - Error alert, you cannot assign to id -> marked as readonly

//Intersection Type - combines object types to minmize code
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;
const happyFace: ColorfulCircle = {
    radius: 3,
    color: "yellow"
}

//Intersection type with more properties added
type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat & Dog & {
    age: number;
};


//Exercise
type Movie = {
    readonly title: string;
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice: {
        budget: number;
        grossUS: number;
        grossWorldWide: number;
    };
};

function getProfit(movie: Movie): number{

    return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;

    //Another version of the above line using DESTRUCTURING
    const {grossWorldWide, budget} = movie.boxOffice;
    return grossWorldWide - budget;
}

//We could also use In-line DESTRUCTURING
function getProfit1({boxOffice: {grossWorldWide, budget}}: Movie): number{
    return grossWorldWide - budget
}