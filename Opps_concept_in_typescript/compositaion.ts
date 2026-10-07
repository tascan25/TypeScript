class Heater{
    heat(){

    }
}

class ChaiMaker{
    constructor(private heater: Heater){

    }
    make(){
        this.heater.heat()
    }
}