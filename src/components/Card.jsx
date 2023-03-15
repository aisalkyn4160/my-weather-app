import styled from 'styled-components';


export const Card = ({ day }) => {

  const date = (new Date(day.dt));

  return (
    <CardItem>
      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
        alt="weather-icon"
      />
      <span>
        {date.toLocaleDateString()}
      </span>
      <span>Min: {day.temp_min}&deg;C</span>
      <span>Max: {day.temp_max}&deg;C</span>
    </CardItem>
  );
};

const CardItem = styled.div`
  width: 140px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  box-shadow: 2px 1px 10px 4px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  background: #0000002e;
  color: white;

  @media (max-width: 525px) {
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    width: 100%;
    height: 50px;
    box-shadow: none;
    font-size: 11px;
  }

  && span{
    text-align: center;
  }
`
const WeatherIcon = styled.img`
  @media (max-width: 430px) {
    width: 70px;
  }
`