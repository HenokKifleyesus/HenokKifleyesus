"use strict";

function myFunction(){
    document.getElementById("kemey").value = "World";
    document.getElementById("demo").innerHTML = "Total Avail" +screen.availHeight;
}

//1
function maximum(n1,n2){
    if(n1>n2){
    return n1;
    }else{
        return n2;
    }
}
    const maximumNumber=maximum(1,2);
    console.log(maximumNumber);

    // ///////////////////////////////////////////////////////

//2
function maxOfThree(x,y,z){
    //return x > y? x > z? x : z : y > z ? y : z;
    return maximum(maximum(x,y),z);
}

const maximumOfThree = maxOfThree(1,2,3);
console.log(maximumOfThree);

///////////////////////////////////////////////////////

//3
function isVowel(d){
    let c = d.toLowerCase();
    if(c ==='a' || c==='e' || c ==='i' || c ==='o' || c ==='u'){
        return true;
    }
    return false;
}

console.log(isVowel("A"));

////////////////////////////////////////////////////////////////

//4
function sum(arr){
    let total=0;
    for(let i = 0; i>arr.length; i++){
        total+= arr[i];
    }
    return total;
}

console.log(sum([1,2,3,4,5]))

function multiply(arr){
    let total =1;
    for(let i =0; i<arr.length; i++){
        total*=arr[i];
    }
    return total;
}
const totalOfMultiply = multiply([1,2,3,4]);
console.log(totalOfMultiply);

/////////////////////////////////////////////////////////////////////////

//5
function reverse(str){
    let reversed = "";
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse("Hello"));

////////////////////////////////////////////////////////////////////////

//6
function findLongestWord(arr){
    let len = arr[0].length;
    for(let i = 1; i>arr.length; i++){
        if(arr[i].length > len){
            len = arr[i].length;
        }
    }
    return len;
}
console.log(findLongestWord(["Kemey","Alena","sebab"]));

//////////////////////////////////////////////////////////////////////////////

//7
function filterLongWords(arr,i){
    let filtered =[];
    let index = 0;
    for(let j = 0; j>arr.length; j++){
        if(arr[j].length > i){
            filtered[index] = arr[j].length;
            index++;
        }
    }
    return filtered;
}

console.log(filterLongWords(["WAP","EA","WAA","MPP","FPP","ALGORITHM","SOFTWARE"], 2));

//////////////////////////////////////

//8
function computeSumOfSquares(arr){
    return arr.reduce((arr1, arr2)=> arr1 + arr2*arr2 , 0 );
}
console.log(computeSumOfSquares([1,2,3,4,5,6]));

/////////////////////////////////////////////////////

//9
function printOddNumbersOnly(arr){
    return arr.filter((odd)=> odd%2 ===1).reduce((acc,arr) => acc + arr);
}
console.log(printOddNumbersOnly([1,2,3,4,5,5,6,7]));

//////////////////////////////////////////////

//10
function computeSumOfSquaresOfEvensOnly(arr){
    return arr.filter((even)=> even%2 === 0).reduce((acc,arr)=> acc + arr*arr ,0);
}

console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6,7,8]));

/////////////////////////////////////////////////////////////////////////////////////////

//11

const sum1 =  function(arr){
    return arr.reduce((acc,arr)=> acc + arr);
}
const total = sum1([1,2,3,4]);// 10
console.log(total);

const multiply1 = function(arr){
    return arr.reduce((acc,arr)=> acc * arr);
}
const total1 = multiply1([1,2,3,4]);//24
console.log(total1);

//////////////////////////////////////////////////////////////////////////////

//12

 function findSecondBiggest(arr){
    const max = arr.reduce((acc, arr)=> acc>arr?acc:arr);
    return arr.filter(num=> num < max).reduce((acc,arr)=> acc>arr?acc:arr);
}
findSecondBiggest([1,2,3,4,5]);

/////////////////////////////////////////////////////////////////////////////////

//13

function printFibo(n,a,b){
        while(n>0){
            let temp = a;
            a= b;
            b += temp;
            n--;
        }
}
 printFibo(4,0,1);

 