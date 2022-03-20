import styled from "styled-components";
import colors from "../../utils/colors";

export const ActionButton = styled.button`
    color: #fff;
    border: none;
    width: 50px;
    border-radius: 5px;
    background-color: ${props => props.color};
    cursor: pointer;
    :hover{
        transform: scale(1.1);
    }
`
export const ReturnArrow = styled.button`
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    color: ${colors.primary_orange};
    position: absolute;
    left: 15px;
    top: 15px;
    :hover{
        color: #fff;
        background-color: ${colors.primary_orange};
        transform: scale(1.1);
    }
`
export const LabelFormDefault = styled.label`
    width: 90%;
    color: #000;
    font-size: 15px;
    font-weight: bold;
`
export const InputFormDefault = styled.input`
    height: 40px;
    width: 90%;
    border-radius: 8px;
    background-color: #f1f1f1;
    padding: 5px;
    overflow: hidden;
`
export const SelectFormDefault = styled.select`
    height: 40px;
    width: 90%;
    border-radius: 8px;
    background-color: #f1f1f1;
    padding: 5px;
    overflow: hidden;
`
export const SendButton = styled.button`
    width: 200px;
    padding: 8px;
    margin-top:5px;
    background-color: ${colors.secundary_green};
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    :disabled{
        background-color: #c4c4c4;
        cursor: initial;
    }
    :hover{
        background-color: blue;
    }
`
export const AddButton = styled.button`
    position: absolute;
    top: 10px;
    left: 15px;
    height: 50px;
    width: 200px;
    border: none;
    border-radius: 6px;
    background-color: ${colors.secundary_green};
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    font-weight: bold;
    :hover{
        background-color: blue;
    }
`