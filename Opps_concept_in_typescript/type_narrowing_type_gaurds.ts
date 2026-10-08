// type narrowing and type gaurds in typescript 


function getChai(kind: string | number){
    if (typeof kind === "string"){
        return `making ${kind} chai...`
    };
    return `chai order: ${kind}`;
}

function serverChai(msg?: string){
    if (msg){
        return `serving: ${msg}`;
    }
    return `serving default masala chai...`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if (size==="small"){
        return "small cutting chai"
    }
    if (size === "medium" || size === "large"){
        return "make extra chai"
    }

    return `chai order ${size}`
}


class kulhad {
    serve(){
        return "serving kulhad chai..."
    }
}

class cutting{
    serve(){
        return "serving cutting chai..."
    }
}


function serve(chai: kulhad | cutting){
    if (chai instanceof kulhad){
        return chai.serve()
    }
    else if (chai instanceof cutting){
        return chai.serve()
    }
}


type chaiOrder = {
    type:string, 
    sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return (
        typeof obj === "object" && obj !== null && typeof obj.type === "string" && typeof obj.type === "number"
    )
}

function serveOrder(item:chaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} with ${item.sugar}`
    }
    return `serving custom chai: ${item}`
}


type masalachai = {type:"masala", spicelevel:number};
type gingerchai = {type:"ginger", amount: number};
type elaichichai = {type:"elaichi", aroma: number}; 

type chai = masalachai | gingerchai | elaichichai; 

function makeChai(order: chai){
    switch (order.type) {
        case "elaichi":
            return "elaichi chai";
            break;

        case "ginger":
            return "ginger chai";
            break;
        
        case "masala":
            return "masala chai";
            break;
    }
}