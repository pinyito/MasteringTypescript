/**Interfaces
 * They serve almost the exact smae purpose as type aliases with a slightly different syntax.
 * We can use them to create reuseable, modular types that describe the shapes of objects
 */
//Interfaces focus on objects only in contrast to type aliases

interface Point {
    x: number;
    y: number;
};

const pt: Point = {x: 24, y: 387};

//We can also use optinal properties and readonly here
interface Person{
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string;
};

//Interface Methods
//We can add methods to interfaces to define the behavior of the object
interface Person1{
    readonly id: number;
    firstName: string;
    lastName: string;
    nickName?: string;
    sayHi: () => string; //this can also be sayHi(): string
};

const thomas: Person1 = {
    firstName: "Thomas",
    lastName: "Hardy",
    id: 3189,
    sayHi: () => {
        return "Hello";
    },
};

//The method can also have parameters
interface Product{
    name: string;
    price: number;
    applyDiscount(discount: number): number;
};

const shoes: Product = {
    name: "Blue camel shoes",
    price: 328,
    applyDiscount(amount: number){
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};

//Reopening and Adding new properties to interfaces
interface Dog{
    name: string;
    age: number;
};


//Later--- you may add more properties to Dog without overriding it
interface Dog{
    breed: string;
    bark(): string;
};

const simba: Dog = {
    name: "Simba",
    age: 3,
    breed: "German Shepherd",
    bark(){
        return "Wooo woof";
    }
};

//Extended Interfaces - Inherit from another interface
//We can create ServiceDogs that inherit from Dog
interface ServiceDog extends Dog{
    job: "Drug sniffer" | "Guide" | "Bomb Detector";
};

//We can now create an object of ServiceDog which will require all properties of Dog and ServiceDog interfaces
const snap: ServiceDog = {
    name: "Snap",
    age: 1.6,
    breed: "Ugandan",
    bark: ()=>{
        return "Wiiwiiwii";
    },
    job: "Guide"
};

//Note, we can extend multiple interfaces

