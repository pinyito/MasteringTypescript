/**Object Types */
//Function accepting object type as a parameter and return void
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
;
printName({ first: "Thomas", last: "Jenkins" });
//A varibale takes an object type as a value
//Assuming we want to represent some coordinate of a sort - variable: type_definiton = value_assignment(object)
var coordinate = { x: 32, y: 12 };
console.log(coordinate);
console.log(coordinate.x);
//A function returns an object type
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
;
var c = randomCoordinate();
console.log(c);
console.log(c.x);
console.log(c.y);
function calculatePayout(song) {
    return (song.numStreams * 0.003);
}
function printSong(song) {
    console.log(song.title);
}
var mySong = {
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
