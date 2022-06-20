document.addEventListener('mousemove', updateRate);
document.querySelector("#btn").onmouseover = compute;


function compute() {
    const principal = document.querySelector("#principal").value;
    const rate = document.querySelector("#rate").value;
    const years = document.querySelector("#years").value;

    const year = new Date().getFullYear() + parseInt(years);
    const interest = principal * years * rate / 100;
    document.querySelector("#result").innerHTML = `If you deposit <b> ${principal} </b> <br> at an interest rate of <b> ${rate} </b><br>
     You will receive an amount of<b> ${interest}</b> <br> in the year of<b> ${year}</b>`;
}


function updateRate() {

    const rateval = document.querySelector("#rate").value;
    document.querySelector("#rate_val").innerText = rateval;
}