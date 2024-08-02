// function start_with(str,char){
//     if(str[0]==char)return true
//     else return false;

// }
// console.log(start_with('sagar','s'));

// try{
//    // let result = someUndefinedFunction();
    
// }

// try{
//     if(typeof result == 'un')
// }

// try{
//     if(typeof result == 'undefined'){
//         throw new Error('not_defined')
//     }
// }
// catch(error){
//     console.log(error.name);
// }



// let age = -5
// try(
//         if(age < 0) {
//             throw new Error ('negative number can not taken as age')
//     }
// )
// catch (error){
//     console.log
// }


// let num='0'
// try{
//     if(typeof num == 'string'){
//         throw new Error("number cannot be string")
//     }
// }catch(error){
//     console.log(error.message);
// }
 

// class NewEx(Exception){
//     def __init__(self, *args: Object) -> None:
//         super
//     }

// AJAX => Asyncronous Javascript and XML
// const xhr = new XMLHttpRequest();
// xhr.open(
//     "GET",
//     "https://reqres.in/api/products/3",
//     true

// );
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status ===200){
//         console.log(xhr.responseText);
//     }
// };
// xhr.send()


// // creating a promise
// let mypromise = new Promise((resolve, reject) => {
//     // asynchronous operation
//     setTimeout(() => {
//         let success = false;
//         if(success){
//             resolve("operation was successful");
//         } else{
//             reject("operation failed");
//         }
//      }, 2000)
//     })

//     mypromise.then((message)=> {
//         console.log("success:" + message);
//     }).catch((error)=>{
//         console.log("error"+error);
//     })



fetch("https://reqres.in/api/products/3")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error:",error));

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data[0].title))
    .catch((error) => console.log("error:",error));