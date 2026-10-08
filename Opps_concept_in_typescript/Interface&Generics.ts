interface Chai {
    flavour: string, 
    price: number, 
    milk?: boolean
}

interface Shop{
    readonly id: number
    name: string 
}

const masala:Chai = {
    flavour: "masala", 
    price: 30
}

const shop:Shop = {
    id: 1,
    name: "chaicodecafe"
}

// shop.id = 2 /// now we cannot do that because in the shop interface the id is the readonly property

interface DiscountCalculator{
    (price: number):number
}

const apply50: DiscountCalculator = (price)=>{
    return price*0.5
}

interface TeaMachine{
    start():void, 
    stop():void
}

 const newMachine: TeaMachine = {
    start(){
        console.log("statrting the machine")
    },
    stop(){
        console.log("stoping the machine")
    }
 }

// index signatures using typescript interface

interface ChaiRatings{
    [flavour: string]: number
}

const ratings: ChaiRatings = {
    masala: 4.5, 
    ginger: 5,

}

// in typescript the interfaces having same name get combined automatically 
interface User{
    name:string
}
interface User{
    age: number
}

const u: User = {
    name:'hites', 
    age:34
}

// we can extend one interface with one or more than one interface

interface A{
    a: string
}
interface B{
    b:string
}
interface C extends A,B {
    c: string
}

const d: C = {
    a:"a", 
    b:"b", 
    c:"c"
}


// generics in typescript

function wrapInArray<T>(item:T):T[]{
    return [item]
}
// here we can pass any data type let it be string or number in place of T 

wrapInArray("masala")
wrapInArray(42)
wrapInArray({name:"string"})

function Pair<A,B>(a:A, b:B): [A,B]{
    return [a,b]

}

Pair("masala","chai")
Pair("chai",{flavour:"masala"})


// generic interface

interface Box<T>{
    content:T
}

interface BigBox<T,J>{
    content : T | J,
}

const newBox:Box<number> = {
    content: 50 
}

const newBigBox: BigBox<number,string> = {
    content: "50"
}


interface ApiPromise<T>{
    status: number, 
    data: T
}

const res:ApiPromise<{flavour:string}> = {
    status: 200, 
    data: {flavour:"masala"}
}