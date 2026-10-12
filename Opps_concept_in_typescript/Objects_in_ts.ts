// objects in typescript

const chai = {
    name:"masala", 
    price: 20, 
    isHot: true
}

let tea: {
    name: string,
     price: number, 
     isHot: boolean
}


type Tea = {
    name: string, 
    price: number, 
    Ingridients: string[]
}

const adrakChai: Tea = {
    name: "adrak chai",
    price: 25, 
    Ingridients: ["milk", "adrak", "sugar""]
}