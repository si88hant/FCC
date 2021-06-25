
const colors = ["greenyellow" , "aqua" , "orange", "pink"];

const clickMe = document.getElementById("colorChanger");

clickMe.addEventListener("click" , handleClick);

function handleClick(){
    let background_color = (Math.floor(Math.random()*colors.length));
    document.body.style.backgroundColor = colors[background_color];
    document.getElementById("span_color").innerHTML = colors[background_color].charAt(0).toUpperCase() + colors[background_color].slice(1);
}




