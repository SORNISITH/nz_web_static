import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid, v4 } from "uuid";
const WeatherApp = (prob) => {
  const { index, datacity } = prob;
  const [apiData, setApiData] = useState(null);
  const [city, setData] = useState(datacity);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city[index].capital[0]}&units=metric&appid=d70bc7143055e32cbdb36d8fe42ceb12`,
      )
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  }, [index]);

  if (prob.index == null) return;
  return (
    <>
      <div
        id={v4()}
        style={{
          width: "100%",
        }}
      >
        <h1>Weather in {apiData?.name}</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ color: "lightgreen" }}>
            Temperature: {apiData?.main?.temp} °C
          </h2>
          <h2>Feels like: {apiData?.main?.feels_like} °C</h2>
          <h2>Min Temperature: {apiData?.main?.temp_min} °C</h2>
          <h2>Max Temperature: {apiData?.main?.temp_max} °C</h2>
          <h2>Pressure: {apiData?.main?.pressure} hPa</h2>
          <h2>Humidity: {apiData?.main?.humidity} %</h2>
          <h2>Wind Speed: {apiData?.wind?.speed} m/s</h2>
          <h2>Wind Direction: {apiData?.wind?.deg} °</h2>
          <h2>Visibility: {apiData?.visibility} meters</h2>
          <h2>Cloudiness: {apiData?.clouds?.all} %</h2>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
