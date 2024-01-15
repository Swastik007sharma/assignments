


function showDate() {
    const currentDate = new Date();

    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    console.log(`Current Time = ${hours} : ${minutes} : ${seconds}`);
}

setInterval(showDate, 1000)

