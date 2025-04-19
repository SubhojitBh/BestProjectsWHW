const timediv = document.querySelector('.time');
const item1 = document.getElementById('date')
const item2 = document.getElementById('time')

// console.log(timediv)

setInterval(() => {
    const dnt = new Date().toLocaleString();
    const dntarr = dnt.split(", ");

    const date = dntarr[0];
    const time = dntarr[1];

    
    item1.innerHTML = `Today's date is ${date}`;
    item2.innerHTML = `Current time is ${time}`;

}, 1000);