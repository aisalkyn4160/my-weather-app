import React from "react";
import styled from 'styled-components';


const Weather = ({ description, city, error, temperature, icon, feels_like }) => {
  return (
    <Container>
      <CurrentWeather>
        {city && <p>{city}</p>}
        {temperature && <Temperature>{temperature}&deg;</Temperature>}
        {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />}
        {description && <p>{description}</p>}
        {feels_like && <span>Ощущается как: {feels_like}&deg;C</span>}
        {error && <p>{error}</p>}
      </CurrentWeather>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 285px;
  margin: 0 auto;
  color: white;
  border-radius: 15px; 
  padding: 10px 0;
  position: relative;
  background-color: #0000002e;
  box-shadow: 2px 1px 10px 4px rgba(34, 60, 80, 0.2);

  @media (max-width: 525px) {
    background: none;
    box-shadow: none;

    && img{
      display: none;
    }

  }

  && img{
    position: absolute;
    top: 15px;
    right: 0px;
  }
  && p::first-letter{
    text-transform: uppercase;

  }
  && span{
    font-size: 14px;
  }
`
const Temperature = styled.p`
  font-size: 45px;
  font-weight: 900;
`

export default Weather