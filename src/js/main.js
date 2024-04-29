let one = document.getElementById("btn-one") // llamamos elemento con "id"
let two = document.getElementsByClassName("btn-two") // llamamos elemento con "class"
let three = document.getElementsByName("btn-three") // llamamos elemento con "name"
let four = document.getElementsByTagName("button") // me llama todos los elementos con el tag "button".

let five = document.querySelector("#btn-five")
let six = document.querySelector(".btn-six")
let seven = document.querySelectorAll('[name="btn-seven"]')
let eight = document.querySelectorAll(".btn")

console.groupCollapsed("element one")
console.log(one);
console.log(two[0]);
console.log(three[0]);
console.log(four[3]);
console.groupEnd()


console.log(five);
console.log(six);
console.log(seven);
console.log(eight[3]);