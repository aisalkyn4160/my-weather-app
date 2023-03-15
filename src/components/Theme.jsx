import styled from "styled-components"
import Icon from '../assets/icons/logo.png'

export const Theme = (props) => {
    return (
        <Label>
            <input type="checkbox" onChange={props.theme} />
            <span></span>
        </Label>
    )
}

const Label = styled.label`
    && input {
        visibility: hidden;
        display: none;
    }

    && span{
        position: relative;
        display: block;
        width: 40px;
        height: 20px;
        background-color: #092c3e;
        cursor: pointer;
        border-radius: 20px;
        overflow: hidden;
        transition: ease-in 0.5s;

    }
    && input:checked ~ span {
        background: #fff;
    }

    && span::before{
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        background: url(${Icon}) 50%/100% no-repeat;
        width: 20px;
        height: 16px;
        border-radius: 50%;
        transition: 0.5s;
    }

    && input:checked ~ span::before{
        transform: translateX(-50px);
    }

    && span::after{
        content: '';
        position: absolute;
        top: 2px;
        right: 2px;
        background: #092c3e;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: 0.5s;
        transform: translateX(50px);
    }

    && input:checked ~ span::after{
        transform: translateX(0px);
    }
`


