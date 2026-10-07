abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(): void {
        console.log("brewing chai...")
    }
}