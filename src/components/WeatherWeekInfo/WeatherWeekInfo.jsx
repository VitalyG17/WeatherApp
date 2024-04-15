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
              <p className='date'>{timestampToDate(day?.date_epoch)}</p>
              <p>{day?.day.avgtemp_c} °C</p>
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
