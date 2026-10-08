// type annotation and inference in typescript 

/* 
in the type annotation, we explicitly tells typescript what is the data type of the variable
and in the inference, typescript automatically inferes the datatype of the variable. 
*/


let drink = "chai";  // here the drink variable will be inferes as the string

let cups = Math.random() > 0.5 ? 10 : 5; // here the cup variable will be inferes as the number


// the above two variables depecit the examples of the type inference in the typescript

let chaiFlavour: string = "masala"; 

// the above variable depict the example of the type annotation in the typescript, here we are explictly telling the variable that it will contain the value as the string

