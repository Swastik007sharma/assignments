let counterValue = 0;
function Count(){
    counterValue++;
    console.log(counterValue);
    setTimeout(Count, 1000)
}

Count();