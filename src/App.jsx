import "./App.css";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherWeekInfo from './components/WeatherWeekInfo/WeatherWeekInfo'
import { useState } from "react";

const API_KEY = "53c940776fa04a17a21211613241404";

function App() {
  const [cityName, setCityName] = useState();
  const [aboutWeather, setAboutWeather] = useState({})

  const getWeather = async (e) => {
    e.preventDefault();
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setAboutWeather(data);
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className='wrapper'>
      <Info />
      <Form weatherMethod={getWeather} handleCityChange={handleCityChange} />
      <WeatherInfo weatherData={aboutWeather}/>
      <WeatherWeekInfo weatherData={aboutWeather}/>
    </div>
  );
}

export default App;
