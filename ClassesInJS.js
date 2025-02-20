class ToyotaCar {
    // defing a constructor
  constructor(brand,mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Car started");
  }

stop() {
    console.log("Car stopped");
    }
}
//creating objects using classes
let Fortuner = new ToyotaCar("Fortuner",10);//constructor
console.log(Fortuner);
let lexus = new ToyotaCar("lexus",12);//construter
console.log(lexus);