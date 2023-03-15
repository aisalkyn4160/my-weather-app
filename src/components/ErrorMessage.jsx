
import styled  from 'styled-components';


export const ErrorMessage = (props) => {
    return(
        <ErrorText>
        {props.error}
        </ErrorText>
    )
}

const ErrorText = styled.div`
    text-align: center;
    color: white;
    font-weight: 900;
    font-size: 20px;

    && p{
        color:red;
    }
`