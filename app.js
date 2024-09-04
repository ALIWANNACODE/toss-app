function flipcoin(){
    var coinElement = document.getElementById("coin");
    var result = Math.random() <0.5 ? "Heads" : "Tails";
    coinElement.textContent =  result;
}