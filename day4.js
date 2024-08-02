//forEach
// let numbers = [1,2,3,4,'sagar',true];    //////////
// numbers.forEach((val,index)=>(
//     console.log(val)
// ))


// forEach example 
// let square = [1,2,3,4];      /////////
// square.forEach((val)=>{
//     console.log(val**2)
// });


//map functional
// let numbers = [1,2,3]
// let newArr = numbers.map((value)=>value*value)
// console.log(newArr);


// let numbers = [1,2,3,4,'sagar',true,10,20,12,5,0];
// let newArr = numbers.map((val)=>val>3)
// console.log(newArr);


// let numbers = [1,2,3,4,'sagar',true,10,20,12,5,0,'sagar'];
// let newArr = numbers.filter((val)=>val>3)
// console.log(newArr);



//if else statement 
// const array1 = [1,230,4,31,12,23432]

// function idk(a,b){
//     if(a>b){
//         return -1
//     }
//     else if(a<b){
//         return 1
//     }
//     else{
//         return 0
//     }
// }

// array1.sort(idk)
// console.log(array1);


// let numbers = [1,2,3,4,5]

// let sum = numbers.reduce((total,val)=>total+val)
// console.log(sum);


// let numbers = [1,2,3,4,5]
// numbers.push(5);  //[1,2,3,4,5]
// numbers[4]
// console.log(numbers);


// let numbers = [1,2,3,4,5]
// let remove = numbers.pop();
// console.log(remove);


// let numbers = [1,2,3,4,5,6,7,8,9]
// let finalArr = numbers.slice(2,7)
// console.log(finalArr);

// let items = ['apple', 'banana', 'cherry', 'banana', 'banana'];
// // console.log(items.lastIndexOf('banana'))
// let banana = items.filter((value)=>{
//     return value == 'banana'
// })
// console.log(banana);


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// matrix[1][1] = 100
// console.log(matrix);

matrix.forEach((value)=>
    value.forEach((val)=>{
        console.log()
    })
)
