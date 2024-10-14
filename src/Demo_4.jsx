import { useEffect, useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import { DivContainer } from "./ui/style.jsx";
import Input from "./component/Input.jsx";
import axios from "axios";
import WeatherApp from "./ui/weatherApp.jsx";
// css component
//@main  call weather sub
const RenderMain = (prob) => {
  const { data, index, datacity } = prob;
  if (data == null) return;
  if (index == null) return;
  let country = data[index];
  let lang = Object.entries(country.languages);
  return (
    <>
      <div className="fadeIn1" style={{ width: "100%", marginLeft: "10px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <div style={{ width: "40%" }}>
            <h1 style={{ color: "lightgreen" }}>{country?.name.common}</h1>
            <h2>Capital : {country?.capital}</h2>
            <h2>Language : {lang[0][1]}</h2>
            <h2>Region : {country?.region}</h2>
            <h2>TimeZone : {country?.timezones}</h2>
            <h2>Population : {country?.population}</h2>
          </div>
          <div style={{ marginRight: "auto", width: "45%" }}>
            <img
              style={{
                height: "auto",
                maxWidth: "110%",
              }}
              src={country.flags.svg}
              alt={country.flags.alt}
            />
          </div>
        </div>
        <hr />
        <div style={{ zIndex: "100" }}>
          <h2>
            MAP :{" "}
            <a
              style={{
                textDecoration: "underline",
                color: "lightskyblue",
              }}
              target="_blank"
              href={country.maps.googleMaps}
            >
              {country.maps.googleMaps}
            </a>
            <div style={{ width: "100%" }}>
              <WeatherApp datacity={data} index={index} />{" "}
            </div>{" "}
          </h2>
        </div>
      </div>
    </>
  );
};

//@side div display country render  -TODO
const RenderCountry = (prob) => {
  const { data, setIndex } = prob;
  if (!data) return;
  const render = () => {
    return (
      <>
        {data.length == 0 ? (
          <h2 key={v4()} style={{ marginRight: "20px", textAlign: "right" }}>
            {" Search Data >>"}
          </h2>
        ) : (
          data?.map((item, index) => (
            <div
              onClick={() => setIndex(index)}
              key={v4()}
              style={{ alignItems: "center", cursor: "pointer" }}
            >
              <h2 style={{ marginRight: "20px", textAlign: "right" }}>
                {item.name.common}
              </h2>
              <hr />
            </div>
          ))
        )}
      </>
    );
  };
  return (
    <>
      <hr />
      {render()}
    </>
  );
};

//@d4
const Demo_4 = () => {
  const [countryData, setCountryData] = useState([]);
  const [inputValue, setInputValue] = useState("cambodia");
  const [filterCountry, setFilterCountry] = useState([]);
  const [limit, setLimit] = useState(true);
  const [index, setIndex] = useState(null);
  const [readystate, setReadyState] = useState(false);
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        setCountryData([...countryData, ...res.data]);
      })
      .then(() => {
        setReadyState(true);
      })
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    handleFind(10);
    setIndex(0);
  }, [readystate]);
  useEffect(() => {
    handleFind();
  }, [inputValue]);
  function handleFind(n) {
    setIndex(null);
    if (inputValue == "") return;
    setFilterCountry(
      countryData
        .filter((items) => {
          return items?.name?.common
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        })
        .slice(0, limit ? n : 5),
    );
  }
  const handleClear = () => {
    setIndex(null);
  };
  return (
    <>
      <DivContainer className="fadeIn3">
        <h1>DEMO - Weather APP</h1>
        <p>API from :</p>
        <a
          style={{
            color: "green",
          }}
          href="https://openweathermap.org/"
        >
          https://openweathermap.org/
        </a>
        <hr />
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "30%" }}>
            <Input
              style={{ width: "90%" }}
              focus={true}
              placeholder="Country Name"
              set={setInputValue}
              value={inputValue}
            />
            <div style={{ width: "100%" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button style={{ width: "50%" }} onClick={() => handleFind(10)}>
                  Find
                </button>
                <button style={{ width: "50%" }} onClick={handleClear}>
                  Clear
                </button>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{
                    width: "50%",
                    backgroundColor: !limit ? "pink" : "lightblue",
                    color: "black",
                  }}
                  onClick={() => handleFind(100)}
                >
                  {!limit ? "Display Limit :10" : "Display : 100 country"}
                </button>
                <button style={{ width: "50%" }}>----</button>
              </div>
            </div>
            <div style={{ maxHeight: "70vh", overflow: "auto" }}>
              <RenderCountry data={filterCountry} setIndex={setIndex} />
            </div>
          </div>
          <div style={{ width: "70%" }} className="main">
            <RenderMain data={filterCountry} index={index} />
          </div>
        </div>
      </DivContainer>
    </>
  );
};

export default Demo_4;
