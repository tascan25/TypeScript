function makeChai(type:string, cups:number){
    console.log(`making ${cups} cups of ${type} chai...`)
}
makeChai("masala chai",4);

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string): string | null{
    if(!order) return null 
    return order
}

//logger functions, they generally do not return anything

function logChai():void{
    console.log("making chai...")
}

function orderSingleChai(type?:string){

}


function orderBulkChai(type?:string, count: number= 1){

}


type order = {
    type: string, 
    sugar: string, 
    size: "small" | "large"
}

function createChai(order:order){
     console.log("chai is in progress")
}