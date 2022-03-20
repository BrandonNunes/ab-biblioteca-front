import styled from "styled-components"
import Modal from 'react-modal';
import colors from "../../../utils/colors";

export const ConfirmModal = styled(Modal)`
    background-color: #fff;
    width: 400px;
    height: 200px;
    margin: auto;
    margin-top: 5%;
    border-radius:5px;
    padding:15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`
export const Question = styled.h5`
    font-size:20px;
    text-align: center;
`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
export const CloseButton = styled.button`
    color: #fff;
    background-color: ${colors.primary_red};
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
export const ConfirmButton = styled.button`
    color: #fff;
    background-color: ${colors.primary_green};
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`