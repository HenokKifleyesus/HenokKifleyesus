"use strict";


//6,

let count = {
        counter:0,
        add: function(){
                this.counter += 1;
        },
        reset:function(){
                 this.counter = 0;
        }
}
count.counter;
count.add();
count.counter;
count.reset();

////////////////////OR/////////////////////////////
const counter = function(){
	let count = 0;
	let add = function(){
		count+= 1;
	}

	let reset = function(){
		count = 0;
	}
	
	function getCounter(){
		return count;
	}

	return {
	  add: add,
	  reset : reset,
	  getCounter : getCounter
	}	
}
const counterReseter = counter();
counterReseter.count;
counterReseter.add();
counterReseter.getCounter();






////////////////////////////////////////////
// const counter = function(){
//     let count = 0;

//     let add = function(){
//         count+= 1;
//     }

//     let reset = function reset(){
//          count = 0;
//     }

//     let getCounter = function(){
//         return count;
//     }

//     let hideFunction = function(){
//         console.log("The file is hidden, can not be called");
//     } 

//     return {
//         add: add,
//         reset: reset,
//         getCounter: getCounter
//     };

// }

// let c = counter();
//     c.count;
//     c.add();
//     c.getCounter();


//7, counter is a free variable. A free variable is a variable being accessed by a function while it is outside its scope.
//We can see that in this add function there is a retur funcitons that uses a counter variable from the outside scope.

//8,  
function make_adder(inc){
	var count = 0;
	return function(){
		return count += inc;
	}
}


//9, Put The whole page inside function braces and invoke it, i.e. (page)()


//10, 
const module = (function(){
	//private fields
	let name;
	let age;
	let salary;
	
	// public methods
	let setAge = function(newAge){this.age = newAge;}
	let setSalary = function(newSalary){ this.salary = newSalary;}
	let setName = function(newName){ this.name = newName;}
	let increaseSalary = function(percentage){ this.salary = (1*percentage) + getSalary();}	
	let incrementAge = function(){ this.age = getAge() + 1;}

	// private methods
	let getAge = function(){ return this.age;}
	let getSalary = function(){ return salary;}
	let getName = function(){ return this.name;}

	return {
		setAge: setAge,
		setSalary: setSalary,
		setName: setName,
		increaseSalary: increaseSalary,
		incrementAge: incrementAge
		}
})();

module.setAge(10);
module.setSalary(100000.0);
module.increaseSalary(20);
module.setName("Henok Kifleyesus");
	
//11, 

module.address = undefined;
    module.setAddress = function(newAddress){ this.address = newAddress;}
    module.getAddress = function(){ return this.address;}	


