"use strict";



//1,
const person = {
    name:"",
    dateOfBirth:"",
    getName: function(){
            return this.name;
    },
    setName: function(name){ this.name = name; }
}

const john = Object.create(person);
john.setName("john");
john.getName();
john.dateOfBirth = "1998-12-10";
console.log("The person's name is " + john.getName());
console.log("John was born on " +john.dateOfBirth);

//2

const employee = Object.create(person);
employee.salary = 0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
    return `${this.name} is a ${jobTitle} who earns ${this.salary}`; 
}
//const anna = Object.create(person);
employee.setName("Anna");
employee.salary = "$249,995.50";
console.log(employee.doJob("Programmer"));

//3
function Person1(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

Person1.prototype.getName = function(){
        return this.name;
}
Person1.prototype.setName = function(newName){
        this.name = name;
}
Person1.prototype.toString = function(){
            return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;
}

const peter = new Person1("Peter","1985-11-10");
console.log(peter.toString());



