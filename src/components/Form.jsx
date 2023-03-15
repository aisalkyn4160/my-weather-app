import React from "react";
import styled from "styled-components";

const Form = (props) => {

  return (
    <CitySelect onSubmit={props.getWeather} >
      <input type="text" placeholder="Введите местоположение..." name="city" />
      <button>Поиск</button>
    </CitySelect>
  )
}

export default Form


const CitySelect = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    min-width: 250px;
    max-width: 350px;
    margin: 0 auto 40px;
    height: 30px;
    padding: 0 10px;

    && input {
      outline: none;
      width: 300px;
      padding: 5px;
      background-color: white;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
      border-radius: 4px;
      border: none;
      font-size: 14px;
    }

    && button {
      padding: 5px 10px;
      height: 30px;
      background: linear-gradient(to bottom, #d8e0de 0%,#aebfbc 52%,#aebfbc 62%,#aebfbc 62%,#aebfbc 68%,#aebfbc 68%,#99afab 78%,#8ea6a2 89%,#4e5c5a 100%,#0e0e0e 100%,#4e5c5a 100%);
      padding: 5px 16px;
      height: 30px;
      outline: none;
      border-radius: 4px;
      border: none;
    }

    && button:hover{
      background: linear-gradient(to bottom, #828c95 0%,#b5bdc8 6%,#b5bdc8 49%,#b5bdc8 100%,#28343b 100%);
    }
`