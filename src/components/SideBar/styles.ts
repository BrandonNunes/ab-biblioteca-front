
import styled from "styled-components";
import colors from "../../utils/colors";



export const SideBarContainer = styled('nav')<{showBar: boolean}>`
    width: 12rem;
    height: 100vh;
    background-color: ${colors.blue_info};
    position: fixed;
    left: ${props=> props.showBar ? '-300px' : 0 };
    transition: all .5s;
    padding: 15px;
    padding-top: 70px;
    z-index: 999;
`
export const NavItem = styled('p')`
    color: #fff;
    font-size: 25px;
    height: 80px;
    text-decoration: none;
    &:hover{
        color: ${colors.primary_orange} ;
        text-decoration: underline;
    }

`