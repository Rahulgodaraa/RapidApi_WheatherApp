Weather Application 🌤
A simple weather application built with React that provides current weather information and a 3-day forecast for any city. This app uses the WeatherAPI to fetch real-time data and displays it in a user-friendly interface.

Features
Search for any city and get current weather data.
View a 3-day weather forecast including temperature, weather conditions, and wind/humidity details.
Display weather icons based on current conditions using React Icons.
Responsive UI with easy-to-read weather information.
Tech Stack
React.js for the frontend.
Axios for making API requests.
WeatherAPI for fetching weather data.
React Icons for displaying weather-related icons.
Preview

Live Demo
You can check the live demo here.

Setup and Installation
Prerequisites
Node.js and npm installed on your local machine. You can download them here.
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install Dependencies
bash
Copy code
npm install
Get Your API Key
This project uses the WeatherAPI. To get started:

Go to WeatherAPI.
Sign up and get an API key.
Create Environment File
Create a .env file in the root of your project directory and add your WeatherAPI key:

makefile
Copy code
REACT_APP_WEATHER_API_KEY=your-api-key-here
Running the Application
Start the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

How to Use
Enter the city name in the input field.
Click the "Enter" button to fetch weather details.
The current weather along with a 3-day forecast will be displayed, including temperature, wind speed, humidity, and icons representing the weather conditions.
API Details
This application uses the WeatherAPI to fetch:

Current weather data.
3-day weather forecast.
Example API Request
arduino
Copy code
GET https://weatherapi-com.p.rapidapi.com/forecast.json
Query Parameters:
q: The city name.
days: Number of forecast days (set to 3 by default).
Folder Structure
java
Copy code
weather-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── .env
├── .gitignore
├── package.json
└── README.md
Dependencies
React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for the browser and Node.js.
React Icons: A popular icon library for React.
WeatherAPI: The weather service used to retrieve real-time data.
Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

Fork the project.
Create a new feature branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
