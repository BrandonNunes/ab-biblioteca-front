import Modal from "react-modal";
import styled from "styled-components";
import colors from "../../../utils/colors";


export const NewBookContainer = styled(Modal)`
    position: relative;
    background-color: #fff;
    width: 50%;
    height: 95%;
    overflow-y: scroll;
    border-radius: 8px;
    margin: auto;
    margin-top: 2%;
    box-shadow: 1px 2px 2px 2px ${colors.primary_orange};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 5px;
    ::-webkit-scrollbar{
        width: 1px;
    }   
`
export const NewBookTittle = styled.h4`
    font-size: 20px;
    text-decoration: underline;

`
export const CloseButton = styled.button`
    position: absolute;
    right: 15px;
    font-size: 20px;
    color: ${colors.primary_orange};
    border: none;
    cursor: pointer;
    background-color: transparent;
`
export const MessageError = styled.p`
    color: ${colors.primary_red};
    font-size: 10px;
`