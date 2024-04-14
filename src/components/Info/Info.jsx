import "./Info.css";

function Info() {
  return (
    <div className="info-wrapper">
      <a href="/"><img className="logo" src="src/assets/logo.png" alt="Логотип сайта"/></a>
      <div>
        <h2>Weather App</h2>
        <p>Узнай погоду в любом городе мира!</p>
      </div>
    </div>
  );
}

export default Info;
