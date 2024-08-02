// async function fetchData(){
//     let fetchApi = await fetch("https://bored-api.appbrewery.com/random");
//     let res = await fetchApi.json();
//     console.log(res);
// }
// fetchData();

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 2000);
//     });
// }


// async function asyncCall() {
//     try {
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     console.log(result)
//     console.log("done")
//     } catch (error) {
//         console.log(error);
//     }
// }


// setInterval(() => {
//     console.log("hi");
// }, 1000);


// let count = 0;
// let timer = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count === 11) {
//         clearInterval(timer);
//     }
// }, 2000);


console.log(new Date().toLocaleDateString());

