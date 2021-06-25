const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickMe = document.getElementById("colorChanger");

clickMe.addEventListener("click" , handleClick);

function handleClick(){
    let hexColor = '#';

    for(let i=0; i<6; i++){
        hexColor = hexColor + hex[randomNumber()];
    }
    
    document.body.style.backgroundColor = hexColor;
    document.getElementById("span_color").innerHTML = hexColor;
}

function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}

