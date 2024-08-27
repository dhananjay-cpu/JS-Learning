let form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let weight = parseInt(document.getElementById("weight").value);

    let height = parseInt(document.getElementById("height").value);

    let result = document.getElementById("div4");

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter valid weight ${weight}`;
    }
    else{
        let bmi = (weight*10000/height**2).toFixed(2);
        result.innerHTML = `Your BMI result ${bmi}`;
    }
})
