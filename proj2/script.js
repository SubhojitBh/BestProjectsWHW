const form = document.querySelector('#form');
// console.log("hi")
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector('#results');

    if (height <= 0) {
        results.innerHTML = "Enter a valid Height"
    }
    else if (weight <= 0) {
        results.innerHTML = "Enter a valid Weight"
    }
    else {
        const bmi = ((weight) / ((height * height)/10000)).toFixed(2);
        //console.log(bmi);
        let cond = " (Normal Weight)";
        let color = "green";
        if (bmi < 18.6) {
            cond = " (Under Weight)"
            color = "yellow";
        }
        else if (bmi > 24.9) {
            cond = " (Over Weight)"
            color = "red";
        }

        results.innerText = bmi + cond;
        results.style.color = color
    }
})