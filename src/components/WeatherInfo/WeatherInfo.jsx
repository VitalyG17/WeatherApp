/* eslint-disable react/prop-types */
import "./WeatherInfo.css";
import night from "../../assets/night.png";
import day from "../../assets/day.png";

function WeatherInfo({ weatherData }) {
  const getWeatherIcon = (iconSrc) => {
    if (iconSrc) {
      return iconSrc.includes("//cdn.weatherapi.com/weather/64x64/night/")
        ? night
        : iconSrc.includes("//cdn.weatherapi.com/weather/64x64/day/")
        ? day
        : iconSrc;
    } else {
      return iconSrc;
    }
  };

  return (
    <>
      <div className="weather-today-info">
        {weatherData?.current?.condition?.icon && (
          <img
            src={getWeatherIcon(weatherData?.current?.condition?.icon)}
            alt="Изображение времени суток"
          />
        )}
        <div className="weather-info">
          <h2>Погода в городе {weatherData?.location?.name}</h2>
          <h3>
            Дата {timestampToDate(weatherData?.location?.localtime_epoch)}
          </h3>
          <p>Температура: {weatherData?.current?.temp_c} °C </p>
          <p>Ощущается как: {weatherData?.current?.feelslike_c} °C </p>
          <p>Влажность: {weatherData?.current?.humidity} %</p>
          <p>Скорость ветра: {weatherData?.current?.wind_kph ? (((weatherData?.current?.wind_kph)*1000)/3600).toFixed(2) : ""} м/с</p>
        </div>
      </div>
    </>
  );
}

const timestampToDate = (timestamp) => {
  if (!timestamp) return "";
  const date = new Date(timestamp * 1000);
  const day = date.getDate();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const year = date.getFullYear();
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  return `${day}.${month}.${year}, ${dayOfWeek}`;
};

// eslint-disable-next-line react-refresh/only-export-components
export {timestampToDate}
export default WeatherInfo;


