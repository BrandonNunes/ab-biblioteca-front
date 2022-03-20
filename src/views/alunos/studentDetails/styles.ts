import styled from "styled-components";
import colors from "../../../utils/colors";

export const ContainerDetails = styled.div`
    width: 80%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 5px;
    position: absolute;
    top: 20px;
`

export const LabelBookDetail = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`
export const ValueBookDetail = styled.span`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`
export const CardDetails =styled.div`
    background-color: ${colors.primary_orange};
    border-radius: 5px;
    padding: 10px;
`