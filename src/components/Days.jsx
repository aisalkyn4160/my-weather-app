import { Card } from "./Card"
import styled  from 'styled-components';


export const Days = (props) => {
  const days  = [
    {
      id: props.dt,
      icon: props.icon,
      dt: props.dt,
      temp_max: props.temp_max,
      temp_min: props.temp_min
    },
    {
      id: props.dt8,
      icon: props.icon8,
      dt: props.dt8,
      temp_max: props.temp_max8,
      temp_min: props.temp_min8
    },
    {
      id: props.dt16,
      icon: props.icon16,
      dt: props.dt16,
      temp_max: props.temp_max16,
      temp_min: props.temp_min16
    },
    {
      id: props.dt24,
      icon: props.icon24,
      dt: props.dt24,
      temp_max: props.temp_max24,
      temp_min: props.temp_min24
    },
  
    
  ]
  return(
    <Container>
      <DaysBox>
      { days.map((day, id) => <Card day = {day} key= {id}/>)}
     </DaysBox>
    </Container>
    
  )
    
       
}

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 10px;
  
`
const DaysBox = styled.div`
  max-width: 700px;
  margin: 100px auto 0;
  display: flex;
  justify-content: space-around;
  gap: 10px;

  @media (max-width: 525px){
    flex-direction: column;
    background: #0000001f;
    border-radius: 4px;
    position: absolute;
    width: 97%;
    right: 6px;
    bottom: 20px;
  }
`