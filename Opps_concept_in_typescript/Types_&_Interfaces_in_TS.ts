type chaiOrder= {
    type:string, 
    sugar: string, 
    strong: boolean,
}

interface tearecipe {
    water:number
    milk: number
}

function makeChai(order:chaiOrder){
    console.log("makig  chai")
}

class MasalaChai implements tearecipe {
    water =  100;
    milk =  50
}

interface cupSize {
    size:"small" | "large"
}

class chai implements cupSize{
    size : "small" | "large" = "small"
}

type TeaType = "masala" | "ginger" | "lemon"; 

function orderChai(t:TeaType){
    console.log(t)
}

type baseChai = {teaLeaves: number}
type Extra = {masala: number}

type masalaChaiii = baseChai & Extra;