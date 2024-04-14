import './Form.css';

// eslint-disable-next-line react/prop-types
function Form({ weatherMethod, handleCityChange }) {
  return (
    <div className='form-wrapper'>
      <form onSubmit={weatherMethod}>
        <input type="text" name='city' placeholder='Введите город' onChange={handleCityChange}/>
        <button>🌤️ Получить погоду</button>
      </form>
    </div>
  );
}

export default Form;
