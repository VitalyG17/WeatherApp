/* eslint-disable react/prop-types */
import "./WeatherWeekInfo.css";
import { timestampToDate } from "../WeatherInfo/WeatherInfo";

function WeatherWeekInfo({ weatherData }) {
  return (
    <div className="weather-week-info">
    <h3>Прогноз погоды на неделю</h3>
    <ul>
      {weatherData?.forecast?.forecastday.map(
        (day, index) =>
          index > 0 && (
            <li key={day?.date_epoch}>
              <b>{timestampToDate(day?.date_epoch)}</b>
              <p>Средняя температура <b>{day?.day.avgtemp_c}°C</b></p>
              <img
                src={day?.day?.condition?.icon}
                alt="Изображение осадков"
              />
            </li>
          )
      )}
    </ul>
  </div>
  );
}

export default WeatherWeekInfo;
