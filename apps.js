let rangeSlider = document.getElementById("characters");
let output = document.getElementById("output");
const charlen = document.getElementById("charlen");

charlen.innerHTML = rangeSlider.value;

//یا
// displayValue()

function displayValue() {
    charlen.innerHTML = rangeSlider.value;
}

const characters = '1234567890-=][poiuytrewqasdfghjkl;!@#$%^&*()_+}{POIUYTREWQASDFGHJKL:"|?><MNBVCXZ/.,mnbvcxz'

function generate() {
    let count = rangeSlider.value
    let result = "";



    //random entekhab kardan
    // Math.random() * characters.length
    // console.log(
    //     Math.floor(Math.random() * characters.length))

    //2
    // let random = characters.charAt(Math.floor(Math.random() * characters.length))


    for (let i = 0; i < count; i++) {
        let random = characters.charAt(Math.floor(Math.random() * characters.length))
        result = result + random

    }
    output.innerHTML = result
}