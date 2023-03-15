import styled from "styled-components";
import Icon from "../assets/icons/logo.png";
import { Theme } from "./Theme";


export const Header = (props) => {
  return (
    <Container>
      <HeaderBlock>
      <Logo_cont>
        <img src={Icon} alt="logo" />
        <span>Weather-App</span>
      </Logo_cont>
      <Theme theme = {props.theme}/>
    </HeaderBlock>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 20px;
`
const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  && img {
    width: 35px;
  }

  && span {
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
`;
const Logo_cont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
