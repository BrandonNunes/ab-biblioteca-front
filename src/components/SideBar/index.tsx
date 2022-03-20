import React from "react";
import { SideBarContainer, NavItem } from './styles'
import { SideBarRoutes } from './sideroutes'
import { NavLink } from 'react-router-dom'

type ShowBar ={
    showBar: boolean,
}


export default function SideBar( props: ShowBar ) {

  
    return(
        <SideBarContainer showBar={props.showBar}>
           { SideBarRoutes.map((route) => {
               return(
                   <NavLink to={route.path} key={route.path} style={{textDecoration:'none'}}>
                         <NavItem>{route.icon}   {route.tittle}</NavItem>                      
                   </NavLink>
               )
           }) }
        
        </SideBarContainer>
    )
}