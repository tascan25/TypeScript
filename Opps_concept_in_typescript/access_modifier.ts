class Chaii{
    public flavour: string = "masala";
    private secretIngridient: string = "cardamom";

    reveal(){
        return this.secretIngridient
    };

    protected shopName: string = "chai corner";
}

class Branch extends Chaii{
    getName(){
        return this.shopName
    }
}

class wallet{
    #balance= 3000 //this variable will also be considered as the private, it is the javascript way of writing the private variable

    getBalance(){
        return this.#balance
    }
}

class cup{
    readonly capacity:number = 250
    constructor(capacity:number){
        this.capacity = capacity
    }
}


class modernChai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if (value>5){throw new Error('Too Sweet, please reduce the sugar')}
        else{
      this._sugar = value
        }
  
    }
}
const newBranch  = new Branch()


const newChai = new modernChai();

console.log(newChai.sugar)
