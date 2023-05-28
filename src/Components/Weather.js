import "./Style.css"
import React, { useState } from "react";
import sun from "./Images/sun.png";
import cloudy from "./Images/cloudy.png";
import drizzle from "./Images/dirzzle.png";
import mist from "./Images/mist.png";
import rainy from "./Images/rainy.png";
// main bg
import bg from "./Images/bg1.avif";
const Weather = () => {
  const [data, setData] = useState({
    temp: 22,
    name: "lahore",
    speed: 6,
    humidity: 5,
    image: mist,
  });
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const searching = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fb20c5fb2634a0ab0ec859fb0478bdc0&units=metric`;
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Sorry a error occured");
          }

          return response.json();
        })
        .then((response) => {
          console.log(response);
          let imgGet = response.weather[0].main;
          let Img = "";
          if ((imgGet = "Clouds")) {
            Img = cloudy;
          } else if (imgGet === "Rain") {
            Img = rainy;
          } else if (imgGet === "Drizzle") {
            Img = drizzle;
          } else if (imgGet === "Mist") {
            Img = mist;
          } else if (imgGet === "Clear") {
            Img = sun;
          } else {
            Img = sun;
          }
          setData({
            ...data,
            temp: response.main.temp,
            name: response.name,
            speed: response.wind.speed,
            humidity: response.main.humidity,
            image: Img,
          });
          setError("");
        })
        .catch((error) => {
          setError("Invalid city" + error.toString());
        });
    }
  };

  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="Text"
            placeholder="Enter your City Plz"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="search_btn" onClick={searching}>
            <img src={require("./Images/search.png")} alt="Searching" />
          </button>
        </div>
        <div className="w_info">
          <img src={data.image} alt="Cloudy" />
          <h1>{data.temp}°c</h1>
          <h2>{data.name}</h2>
        </div>
        <div>
          <p>{error}</p>
        </div>
        <div className="details">
          <div className="col">
            <img src={require("./Images/humidity.png")} alt="Humidity" />
            <div>
              <p>Humidity</p>
              <p>{data.humidity}</p>
            </div>
          </div>
          <div className="col">
            <img src={require("./Images/wind.png")} alt="Humidity" />
            <div>
              <p>Wind</p>
              <p>{data.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
