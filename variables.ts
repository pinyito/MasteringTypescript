let movieTitle: string = "Three idiots";
movieTitle = "The ninja worrior";
//movieTitle = 9; - will result into a typo error
movieTitle.toLocaleUpperCase;
console.log(movieTitle);

//type inference
let myName = "Eria";
myName = "John";
//myName = 10; will result into an error by type inference

//Any
let anything: any = 9;
anything = "Some sentence";
anything = false;

//But any type does not work for functions

//This is an example of a situation where type annotation is very important
const movies = ["Arrival", "The 3 idiots", "Aliens", "The king"];
let foundMovie: string; //If type not annotated here then it will default to "any" type
for(let movie of movies){
    if(movie == "Arrival"){
        foundMovie = "Arrival";
    }
}