import styled from "styled-components";

import colors from '../../utils/colors'

export const Navbar = styled.header`
    display: flex;
    width: 100%;
    height: 6rem;
    background-color:${colors.primary_green};
    padding: 20px;
    align-items: center;
`
export const HambButton = styled.button`
    color:${colors.primary_orange};
    width:50px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const LogoContainer = styled.div`
    width: 100px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    cursor: pointer;
`
export const Logo = styled.img`
    width: 100%;
`