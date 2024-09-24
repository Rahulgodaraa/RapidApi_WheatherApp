import React, { useState } from "react";
import { WiCelsius, WiCloudyGusts, WiDaySunny, WiRain, WiSnow } from "react-icons/wi";
import axios from "axios";

const Weather = () => {
  const [cityName, setCityName] = useState('');
  const [cityDetail, setCityDetail] = useState(null);

  const getWeatherApi = async () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: cityName || "mumbai", // Default to Mumbai if no city is entered
        days: "3", // You can change the number of forecast days
      },
      headers: {
        "x-rapidapi-key": 'bcb9356fdemshccd748b8af8d45ep1e4611jsnd4b309ce9b2a', // Replace with your actual API key
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setCityDetail(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response.data.message);
    }
  };

  // Helper function to get weather icons based on the condition
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Sunny":
        return <WiDaySunny />;
      case "Rain":
        return <WiRain />;
      case "Snow":
        return <WiSnow />;
      default:
        return <WiCloudyGusts />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          border: "2px solid black",
          flexDirection: "column",
          marginTop: "200px",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <div>
          <h1>Weather Application</h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            style={{
              width: "60%",
              margin: "10px",
              padding: "10px",
              borderRadius: "5px",
            }}
            type="text"
            placeholder="Enter City"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            style={{
              margin: "20px",
              padding: "10px",
              background: "black",
              color: "white",
              border: "grey",
              borderRadius: "5px",
            }}
            onClick={getWeatherApi} // Call API when button is clicked
          >
            Enter
          </button>
        </div>

        {/* Displaying current city weather data */}
        {cityDetail && (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ padding: "20px 20px 20px 120px" }}>
                {cityDetail.location.name}
              </p>
              <p style={{ padding: "20px 120px 20px 20px" }}>
                {cityDetail.location.localtime}
              </p>
            </div>
            <div>
              <h1 style={{ fontSize: "25px" }}>
                {cityDetail.current.temp_c} <WiCelsius />
              </h1>
            </div>
            <div style={{ width: "100%", backgroundColor: "black", height: "1px" }}></div>
            <div>
              <p>Humidity: {cityDetail.current.humidity}%</p>
              <p>
                Wind: {cityDetail.current.wind_kph} km/h <WiCloudyGusts />
              </p>
            </div>
            <div style={{ width: "100%", backgroundColor: "black", height: "1px" }}></div>

            {/* Displaying forecast data */}
            <div style={{ width: "100%" }}>
              <h2 style={{ textAlign: "center" }}>3-Day Forecast</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {cityDetail.forecast.forecastday.map((day, index) => (
                  <div
                    key={index}
                    style={{
                      width: "30%",
                      padding: "10px",
                      margin: "10px",
                      border: "1px solid grey",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <h3>{new Date(day.date).toDateString()}</h3>
                    <div style={{ fontSize: "40px" }}>
                      {getWeatherIcon(day.day.condition.text)}
                    </div>
                    <p>{day.day.avgtemp_c}°C</p>
                    <p>{day.day.condition.text}</p>
                    <p>Max Temp: {day.day.maxtemp_c}°C</p>
                    <p>Min Temp: {day.day.mintemp_c}°C</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
