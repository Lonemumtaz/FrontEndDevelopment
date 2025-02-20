class person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");

    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("nothing");
    }
}
class Engineer extends person{
    work(){
        console.log("solving problems,building projects");
    }
}
class Doctor extends person{
    work(){
        console.log("saving lives");
    }
}
let mumtazObject = new Engineer();
// simple js code using super keyword

class person1{
    constructor(name){
        this.species="homo sapiens";
        this.name= name;
    }

eat1(){
    console.log("eat");
}
}
class Engineer1 extends person1{
    constructor(name){
        super(name);//to invoke parent class constructer
    }
    work1(){
        super.eat1();
        console.log("problem solving")
    }
}
let engObj = new Engineer1("mumtaz")