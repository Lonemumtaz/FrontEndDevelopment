let DATA = "scret information"; 
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data =",DATA);
    }
}
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "new secret information";
    }
}
let student1 = new User("John", "abc@email.com");
let student2 = new User("shahid", "abcde@email.com");
let teacher = new User("dean","dean@gmail,com");
let admin = new Admin("admin", "admin@college");
//error handling
let a=10;
let b=20;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
