let counter = 0;
function CountInInterval(){
    counter++;
    console.log(counter);    
}

setInterval(CountInInterval, 1000)