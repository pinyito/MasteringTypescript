/**Tuples are a special type exclusive to TypeScript (they do not exist in JS).
 * They are arrays of fixed lengths and ordered with specific types - like supr rigid arrays
 */
const color: [number, number, number] = [0,1,55];
//We can also have mixed types
//Assuming a tuple to store http response and status code
type HttpResponse = [number, string];
const goodRes: HttpResponse = [200, "Ok"] //If order of type is changed it complains
//Not quite often used, but we need to know them - preferrably use objects
//You can also have an array of tuples


/**Enums 
 * Enums allow us to define a set of named constants. We can give these constants numeric or string values
*/
//Special type that does not alos exist in JS
//Enum is a set of named constants
enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}

//Can also be defined using strings
enum ArrowKeys{
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

//The named constants reference the values which are either numbers or strings