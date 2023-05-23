window.onload = () => {
    var button = document.querySelector("#btn");
    
    button.addEventListener("click", calculateBMI);
    };
    
    function calculateBMI() {
    var height = parseInt(document
            .querySelector("#height").value);

    var weight = parseInt(document
            .querySelector("#weight").value);
    
    var result = document.querySelector("#result");
    
    if (height === "" || isNaN(height)) 
        result.innerHTML = " ";
    
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = " ";
  
    else {
        var bmi = (weight / ((height * height) 
         / 10000)).toFixed(2);
    
        if (bmi < 18.4) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
    
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;

        else if (bmi >= 25.0 && bmi < 39.9) 
            result.innerHTML = 
                `Over Weight : <span>${bmi}</span>`;
    
        else result.innerHTML =
            `ObCity : <span>${bmi}</span>`;
    }
}
 
function refresh() {
window.location.reload();
}

let refreshs = document.querySelector('#clr');
refreshs.addEventListener("click", ()=> {
    refresh();
})