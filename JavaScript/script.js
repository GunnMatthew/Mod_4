// JSON Payload
let weatherForecast = {
    weather: [
        {day : "Sunday", forecast: "Sunny"},
        {day : "Monday", forecast: "Rain"},
        {day : "Tuesday", forecast: "Partly Cloudy"},
        {day : "Wednesday", forecast: "Overcast"},
        {day : "Thursday", forecast: "Overcast"},
        {day : "Friday", forecast: "Rain"},
        {day : "Saturday", forecast: "Rain"},
    ],
};

const tableBody = document.getElementsByTagName("tbody")[0];

// Loop through array and generate data on website
for(i of weatherForecast.weather)
{
    const row = document.createElement("tr");
    const cellDay = document.createElement("td");
    const cellForecast = document.createElement("td");

    cellDay.textContent = i.day;
    cellForecast.textContent = i.forecast;

    row.appendChild(cellDay);
    row.appendChild(cellForecast);

    tableBody.appendChild(row);
}