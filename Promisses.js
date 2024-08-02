// Callback Hell
// Definition: A callback is a function passed as an argument to another function, to be executed after the completion of the asynchronous operation.

// function fetchData(dataId) {
//     setTimeout(() => {
//         console.log('Data received',dataId);
//     }, 5000);
// }


// fetchData((data) => {
//     console.log(data);
//     fetchData((data) => {
//         console.log(data);
//         fetchData((data) => {
//             console.log(data);
//             // And so on...
//         });
//     });
// });
  

// function getData(id, nextData){
//     setTimeout(()=>{
//         console.log('data', id);
//         if(nextData){
//             nextData();
//         };
//     }, 3000);
// };


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// })







// // CallBack Hell
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         })
//     })
// })





// Promisses ? Solution to Callback Hell
// Promisses are an Object
// Solution to callback hell
// let promise = new Promise((resolve,reject)=>{})


// let promise = new Promise((resolve,reject)=>{
//     console.log('Promise');
//     // resolve('completed');
//     // reject('error')
// })

// console.log(promise);

// Promise state is pending,fulfilled/resolved,rejected
// console.log(promise);
// promise.then((res)=>console.log(res))

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Data found of ',dataId);
//             resolve('Data Found')
//         },2000)
//     })
// }

// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .then((res)=>{
//     return getData(4)
// })























// function getData(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('data', id);
//             // resolve('success');
//             // reject('error occured...')
//         }, 3000);
//     })     
// };

// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .catch((res)=>{
//     console.log(res);
// })  




// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// // console.log(fetchPromise);
// fetchPromise.then((res)=>{
//     // console.log(`Recieved ${res.status}`);
//     let data = res.json()
//     return data
// })
// .then((data)=>{
//     console.log(data);
// })






// let fetchApi = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")


// fetchApi.then((res)=>{
//     let data = res.json()
//     return data
// })
// .then((data)=>{
//     console.log(data[0]);
// })
















// HomeWork Question
// make a database using Object
// make an array of queary/dataid
// use promises - if dataid is present in database resolve and print the value else reject it


let db = {
    1:'Data 1',
    2:'Data 2',
    3:'Data 3'
}

let dataId = [1,2,3,4,5]

async function fetchData(){
    let fetchApi = await fetch("https://bored-api.appbrewery.com/random");
    let res = await fetchApi.json();
    console.log(res);
}
fetchData();