//Function Types

//Parameter Types - annotating function parameters with explicit types
function square(num){ //num considered to by of type "any"
    num.toLocaleUpperCase();
    return num * num;
}

square(3);
square("string type");
square(false);

function squareTyped(num: number){
    num.toLocaleUpperCase(); //num not a function - Error
    return num * num;
}

squareTyped(3);
squareTyped("string type"); //num not a string - Error
squareTyped(false); //num not a boolean - Error

//The function can have multiple parameters differently annotated
const personDesc = (person: string, age: number, isFunny: boolean) => {};

//Working with default function parameters that are type annotated
function greet(visitor: string = "James"){
    return visitor;
}

//Return types
function addTwo(num1: number, num2: number): number{
    return num1 + num2;
}
//Also works with arow functions
const add = (num3: number, num4: number): number => {
    return num3 + num4;
};

//With Anonymous functions, TS can infer the types, no need to annotate if you wish
//Void
function printTwice(msg: string): void{
    console.log(msg);
    console.log(msg);
}

//Function Exercise
function twoFer(personName: string = "you"): string{
    return `One for ${personName}, one for me.`;
}

const isLeapYear = (year: number): boolean => {
    //One version
    if(year % 100 === 0){
        if(year % 400 === 0){
            return true;
        }else{
            return false;
        }
    }else{
        if(year % 4 === 0){
            return true;
        }else{
            return false;
        }
    }

    //Second version
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }else{
        return false;
    }

    //Improved version of 2 above

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
