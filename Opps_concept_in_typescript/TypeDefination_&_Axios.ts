// type defination and axios is typescript 

 /*
 in typescript both errors and hints comes, from the decelartion file. 
 .d.ts files are called as declaration file. 


 most of the library, comes with type defination files of thier own, but there are some library which does not have the 
 type defination files of thier own. then we install that library using this command 

 npm i -d @types/some-library

 and if that still does not solve the problem, then we need to add manually ".d.ts" file for that library.
 
  */
 import axios, {AxiosError, AxiosResponse} from 'axios'


 interface Todo {
    userId: number, 
    id: number, 
    title: string, 
    completed: boolean
 }

const fetchDataUsingAxios = async ()=> {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo",response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error",error.message);
            if(error.response){
                console.log("error status is....",error.response.status);
            }
        }
    }
}


const fetchDataUsingFetch = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }
        const data: Todo = await response.json()
        console.log("Todo", response)
    }
}