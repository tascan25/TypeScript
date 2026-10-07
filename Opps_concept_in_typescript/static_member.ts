// this is the example of the static members, the static variables are associated with the class not the objects of the class

class EkChai{
    static shopName = "ChaicodeCafe"

    constructor(public flavour:string){}
}

console.log(EkChai.shopName)