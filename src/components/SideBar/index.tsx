import React from "react";
import { SideBarContainer, NavItem } from './styles'
import { SideBarRoutes } from './sideroutes'
import { NavLink } from 'react-router-dom'

type ShowBar ={
    showBar: boolean,
    setShowBar(e: boolean): void
}


export default function SideBar( props: ShowBar ) {

  
    return(
        <SideBarContainer showBar={props.showBar}>
           { SideBarRoutes.map((route) => {
               return(
                   <NavLink to={route.path} key={route.path} style={{textDecoration:'none'}}  onClick={()=> props.setShowBar(true)} >
                         <NavItem >{route.icon}   {route.tittle}</NavItem>                      
                   </NavLink>
               )
           }) }
        
        </SideBarContainer>
    )
}