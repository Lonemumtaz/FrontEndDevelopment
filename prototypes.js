const student = {
    fullName: 'John',
    marks: 90,
    printMarks: function() {
        console.log("marks", this.marks);
    },
};
const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    },
};
const KaranArjun1 = {
    salary: 1000,
};
const KaranArjun2 = {
    salary: 1000,
};
const KaranArjun3 = {
    salary: 1000,
    calcTax(){
        console.log("Tax rate is 20%");//this employee has a different tax rate that is 20%
    },

};
// using __proto__ to set the prototype of the object
KaranArjun1.__proto__ = employee;
KaranArjun2.__proto__ = employee;
KaranArjun3.__proto__ = employee;
