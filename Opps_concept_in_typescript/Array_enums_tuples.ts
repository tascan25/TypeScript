// array 

const chaiFlavours: string[] = ["masala","adrak"];
const chaiPrice: number[] = [5,10]

const rating: Array<number> = [4.5,5.0]

type chai = {
    name:string;
    price:number; 
}

const menu: chai[] = [
    {name:"masala",price:4},{name:"adrak", price:10}
] // this is called array of objects

const cities: readonly string[] = ["delhi","mumbai","hyderabad"] //this array is called readonly array

// two dimensional array 
const table: number[][] = [
    [1,2,3],[4,5,6]
]

const multiple_value_array: (string | number)[] = ["saksham",25,"sahil",25, "leesha", 90]

const mutiple_value_array_2: string | number[] = [1,2,] 


// tuples in typescript

const chaiTuple: [string, number] = ["masala",20];
let userInfo: [string, number, boolean?] = ["saksham",25, true]

const locations: readonly [number, number] = [28.566, 29.7878];


// named tuples in typescript 

const chaiItems: [name:string, price:number] = ["masala", 20];
console.log(chaiItems[0]); 



// enums in typescript

enum CUP_SIZE  {
    SMALL, 
    MEDIUM, 
    LARGE
}

const user_cup_size = CUP_SIZE.LARGE


// auto incrementing enums, if we define the value of the first enum then that value will be autoincrement for the other enums if we do not specify the value for the other enums values after that 

enum Status {
    PENDING = 100, 
    SERVED,  // 101
    CANCELLED // 102
}

enum CHAITYPE{
    MASALA = "Masala", 
    GINGER = "Ginger"
}

function makeChai(type: CHAITYPE){
    console.log(`Making : ${type}`);
}
makeChai(CHAITYPE.MASALA);


// there is one unexpected behaviour of the tuple, since tuple is array at the backend, so after creating the tuple via an typescript, we can puish elemnent in to it via an array push function 
let t: [string, number] = ["saksham", 28]; 
t.push(90); 
console.log(t); 