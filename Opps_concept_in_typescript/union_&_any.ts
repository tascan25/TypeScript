/* 
union and any types in typescript
*/

let subscriber: number | string  = 10;
subscriber = "1M"

let apiRequestStatus: 'pending' | 'fullfill' | 'reject' = 'pending'

// apiRequestStatus = "saksham" this will show error because, saksham is not one of the types of the apiRequestStatus. 

let airlineSeat: "aisle"|"middle"|"window" = "window"

airlineSeat = "aisle";


const orders = ['12','20','28','42']

let currentOrders; 
// in typescript, when we do not assign any litleral type to the variable, then the "any" type will be automatically assigned. means that variable can contain any literal type of the typescript

let currentOrder: string | undefined;

for (let order in orders) {
    if (order==='28'){
        currentOrder = order
        break;
    }
    
}

console.log("current order value -> ", currentOrder);