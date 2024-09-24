# 🌤️ Weather Application

A simple weather app built with **React.js** that allows users to check the current weather and a 3-day forecast for any city using the [WeatherAPI](https://www.weatherapi.com/). This app utilizes **React Icons** for visualizing weather conditions.

---

## 📋 Features

- 🌍 **Search by City:** Enter a city name to get the current weather details.
- ⛅ **3-Day Forecast:** Provides a forecast for the upcoming 3 days.
- 🌡️ **Real-time Weather Data:** Displays temperature, humidity, wind speed, and more.
- 🚀 **Responsive Design:** Works seamlessly on both mobile and desktop devices.
- 📊 **API Integration:** Fetches weather data from WeatherAPI using Axios.

---

## 🛠️ Tech Stack

- **React.js** for building the user interface.
- **Axios** for making API requests.
- **WeatherAPI** for retrieving weather data.
- **React Icons** for weather symbols and UI enhancement.

---

## 📸 Preview

![Weather App Screenshot](screenshot.png)

---

## 🚀 How to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd weather-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

---

## 📄 API Setup

This project uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. You'll need to set up your API key as follows:

1. **Get your API Key** from [WeatherAPI](https://www.weatherapi.com/).
2. **Set the API Key in your code**:
   - Replace `your-api-key` in the `x-rapidapi-key` field in your API request with your actual API key.

---

## 💻 Project Structure

```bash
├── src
│   ├── components
│   │   └── Weather.js   # Weather component for displaying data
│   ├── App.js           # Main app file
│   ├── index.js         # Entry point for React app
├── public
│   └── index.html       # Main HTML file
├── package.json         # Project dependencies and scripts
