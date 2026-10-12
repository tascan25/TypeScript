// type assertion, type unkown and type never in typescript 

let response: any = "42"; 
let numericLength: number = (response as string).length

type book  = {
    name:string, 

}

let bookstring = '{"name":"who moved my cheese"}';

let bookobject = JSON.parse(bookstring) as book; 
console.log(bookobject.name);


const inputElement = document.getElementById("username") as HTMLInputElement; 

// all of the above examples, are belongs to the type assertion such that in type assertion we explicitly tells what type of data type is variable 

let value:any = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newValue: unknown; 
newValue = "chai"; 
newValue = [1,2,3]
newValue = 2.5
newValue.toUpperCase() // this line will give us error since the type of newValue is unknown

(newValue as string).toUpperCase()



try {
    
} catch (error) {
    if (error instanceof Error){
        console.log("error", error.message);
    }
    console.log(error)
}


const data:unknown = "chai"

const strData: string = data as string


type role = "admin" | "user"

function redirectbasedonrole(role:role):void{
    if(role === "admin"){
        console.log("redirecting to the admin dashboard")
        return
    }
    if(role === "user"){
        console.log("redirecting to the user dashboard")
        return
    }
    
}