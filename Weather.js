let apikey = "ecb6a458ce820d15f2c1b677435aa5ad"

let searchBtn = document.querySelector("#search-btn")
let resultBox = document.querySelector("#result")


searchBtn.addEventListener("click",async ()=>{
    let cityName = document.querySelector("#city-name").value.trim();

    if(cityName === ""){
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `<h3>Please Enter a City Name</h3>`;
        return;
    }

    try {
        
    } catch (error) {
        console.log(error);
        resultBox.innerHTML = `<h3>Error in Fetching Weather Data...</h3>`;
    }
})