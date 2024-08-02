// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data ")
//         })
//     })
// }


let header = document.getElementById("header");
header.innerText = 



header.style.color = 'red'
header.style.textDecoration = 'underline'
header.style.fontSize = '3rem'


let div = document.getElementById("textElemnt");

let btn = document.getElementById("changeTextButton")

btn.addEventListener('dblclick',()=>{
    div.innerText = 'Change Text';
    div.style.color = 'lightgreen';
    div.style.fontSize = '3rem';
})