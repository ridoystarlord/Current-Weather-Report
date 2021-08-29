document.getElementById("results").style.display = "none";
document.getElementById("searchBtn").addEventListener("click", function () {
  const inputBox = document.getElementById("inputBox");
  const inputText = inputBox.value;
  inputBox.value = "";
  if (inputText == "") {
    document.getElementById("results").style.display = "block";
    const h5 = document.getElementById("results");
    h5.innerText = "Please, Enter Your City Name";
    return;
  }
  checkTemparatures(inputText);
});
const checkTemparatures = async (inputText) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=3a2932337f7c33478c13661649519d79`;

  const res = await fetch(url);
  const data = await res.json();
  showTemparatures(data);
};

const showTemparatures = (data) => {
  const weatherContainer = document.getElementById("show-weather");
  const temparature = data.main.temp - 273.15;
  weatherContainer.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${temparature.toFixed(2)}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
        `;
};
