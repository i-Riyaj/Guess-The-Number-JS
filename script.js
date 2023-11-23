//generating random intezar number
let ranNum = Math.floor(Math.random()*100+1);

let guess = 1;

document.querySelector("button").onclick=()=>{
    let userInput = document.querySelector("input").value;
    if(userInput == ranNum){
        alert(`Your guess is correct and you tried ${guess} times. `);
        guess += 1;
    }
    else if(userInput < ranNum){
        alert("The number is Bigger.");
        guess += 1;
    }
    else{
        alert("The number is Lesser.");
        guess += 1;
    }
}
