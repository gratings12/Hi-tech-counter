let count = 0;
let power = 1;
let roundNum = 0;

document.getElementById("divide").onclick = function(){
    var divide = window.prompt("What number do you want to divide?");
    count = count/divide;
    roundNum = count.toFixed(3)
    document.getElementById("countLabel").innerHTML = roundNum;
}

document.getElementById("decrease").onclick = function(){
    count-=power;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    count+=power;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("multiply").onclick = function(){
    var multi = window.prompt("What number do you want to multiply?");
    count*=multi;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("enchant").onclick = function(){
    if(power == -1){
    document.getElementById("decrease").innerHTML = "Substract"
    document.getElementById("increase").innerHTML = "Add"
    }
    power+=1;
    document.getElementById("POW").innerHTML = "Number multiplier is "+power;
}

document.getElementById("non-enchant").onclick = function(){
    if(power == 1){
    document.getElementById("decrease").innerHTML = "Add"
    document.getElementById("increase").innerHTML = "Substract"
    }
    power-=1;
    document.getElementById("POW").innerHTML = "Number multiplier is "+power;
}