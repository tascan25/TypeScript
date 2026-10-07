class Chai{
    flavour: string;
    price: number;

    constructor(flavour: string, price: number){
        this.flavour = flavour;
        this.price = price
    }
}


const masalaChai = new Chai("Masala Chai",12000)
masalaChai.flavour = "Masala Chai"