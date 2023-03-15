import { useState, useEffect } from "react";
import { Days } from "./components/Days";
import Form from "./components/Form";
import { Header } from "./components/Header";
import Weather from "./components/Weather";
import './App.css'
import { ErrorMessage } from "./components/ErrorMessage";

const API_KEY = "f180befd02179a033b111d9d233617e6";

function App() {
  const [weather, setWeather] = useState([]);
  const [showDays, setShowDays] = useState(false);
  const [theme, setTheme] = useState(false)

  const changeThemeHandler = () => {
    if (theme) {
      setTheme(false)
    } else {
      setTheme(true)
    }
  }

  useEffect(() => {
    const storedPreference = localStorage.getItem('prefersDarkMode');
    if (storedPreference) {
      setTheme(JSON.parse(storedPreference));
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('prefersDarkMode', 'true');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('prefersDarkMode', 'false');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    // Выбрала API 5 Day / 3 Hour Forecast, так как API 4 days или 16 days платные. Но массивы подбирала, чтобы именно показывала погоду на 4 дня срвзу 
    const url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=30&appid=${API_KEY}&lang=ru`;

    e.preventDefault();

    const apiData = await fetch(url)
      .then((res) => res.json())
      .then((data) => data);

    console.log(apiData);
    if (apiData.cod === '200') {
      setWeather({
        data: apiData,
        city: apiData.city.name,
        temperature: Math.round(apiData.list[0].main.temp - 273.15),
        icon: apiData.list[0].weather[0].icon,
        description: apiData.list[0].weather[0].description,
        feels_like: Math.round(apiData.list[0].main.feels_like - 273.15),

        dt: apiData.list[0].dt * 1000,
        temp_max: Math.round(apiData.list[0].main.temp_max - 273.15),
        temp_min: Math.round(apiData.list[0].main.temp_min - 273.15),

        icon8: apiData.list[8].weather[0].icon,
        dt8: apiData.list[8].dt * 1000,
        temp_max8: Math.round(apiData.list[8].main.temp_max - 273.15),
        temp_min8: Math.round(apiData.list[8].main.temp_min - 273.15),

        icon16: apiData.list[16].weather[0].icon,
        dt16: apiData.list[16].dt * 1000,
        temp_max16: Math.round(apiData.list[16].main.temp_max - 273.15),
        temp_min16: Math.round(apiData.list[16].main.temp_min - 273.15),

        icon24: apiData.list[24].weather[0].icon,
        dt24: apiData.list[24].dt * 1000,
        temp_max24: Math.round(apiData.list[24].main.temp_max - 273.15),
        temp_min24: Math.round(apiData.list[24].main.temp_min - 273.15),

        error: "",
        error2: ""
      });
      setShowDays(true);
    } else {
      setWeather({
        error: apiData.message
      })
      setShowDays(false)
    }



  }

  return (
    <div className={`App ${theme ? 'dark' : 'light'}`}>
      <Header theme={changeThemeHandler} />
      <Form getWeather={fetchData} />
      <ErrorMessage error={weather.error} />
      {showDays && <Weather
        city={weather.city}
        temperature={weather.temperature}
        icon={weather.icon}
        description={weather.description}
        feels_like={weather.feels_like}
        error={weather.error}
      />}
      {showDays &&
        <Days
          icon={weather.icon}
          dt={weather.dt}
          temp_max={weather.temp_max}
          temp_min={weather.temp_min}
          icon8={weather.icon8}
          dt8={weather.dt8}
          temp_max8={weather.temp_max8}
          temp_min8={weather.temp_min8}
          icon16={weather.icon16}
          dt16={weather.dt16}
          temp_max16={weather.temp_max16}
          temp_min16={weather.temp_min16}
          icon24={weather.icon24}
          dt24={weather.dt24}
          temp_max24={weather.temp_max24}
          temp_min24={weather.temp_min24}
          error2={weather.error2}
        />
      }
      {console.log(weather.data)}
    </div>
  );
}

export default App;
