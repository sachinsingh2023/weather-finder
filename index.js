const apikey = "8baa5815340a425bac584844241502";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const citysearch = document.querySelector("#city");

const getweth = async (city) => {
    const api = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;
    try {
        const response = await fetch(api);
        const data = await response.json();
        // console.log(data);
        document.getElementById("temp").innerHTML = data.current.temp_c ; // Setting the temperature in a div with id "temp"
    } catch (error) {
        console.error('Error:', error);

    }
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    getweth(citysearch.value);
});
