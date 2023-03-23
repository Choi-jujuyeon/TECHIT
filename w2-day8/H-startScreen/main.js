function getTime() {
    const time = document.querySelector(".time");
    const Tdate = new Date();

    const hours = Tdate.getHours();
    const min = Tdate.getMinutes();
    const sec = Tdate.getSeconds();

    // hours.stye.color = "blue";
    //01.
    if (sec.toString().length === 1) {
        sec = "0" + sec;
    }
    //seconds < 10

    /*02. Alt+shift+방향키
    const hours = String(Tdate.getHours()).padStrat(2,"0");
    const min = String(Tdate.getMinutes()).padStart(2,"0");
    const sec = String(Tdate.getSeconds()).padStart(2,"0");

    */

    // time.innerText = <spans>hours</spans> + "H " + min + "M " + sec + "s";
    // time.innerText = `${hours}H ${min}M ${sec}s`;

    // time.innerHTML = <span class="H">`${hours}`</span>+"H "+ <span>`${minutes}`</span>+"M"+<span>`${seconds}`</span>+"s "+`;

    time.innerHTML = `<span class="H">${hours}</span>H <span class="M">${min}</span>M<span class="S">${sec}</span>S`;
}

getTime();
setInterval(getTime, 1000);

// setInterval(() => {
//     console.log("setInerval");
// }, 1000);
