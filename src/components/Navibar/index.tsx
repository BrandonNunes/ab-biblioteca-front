import React, { useState } from 'react';
import { Navbar, HambButton, LogoContainer, Logo } from './styles';
import SideBar from '../SideBar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Navibar() {
    
    const logo = require('../../assets/logoAB.png');
    const navigate = useNavigate()
    
    const [ showBar, setShowBar ] = useState<boolean>(true)

    return(
        <>
            <Navbar>
                <HambButton onClick={()=> setShowBar(!showBar)}>
                    { showBar ? <FaBars size='50px' /> : <FaTimes size='50px' /> }
                </HambButton>
                <LogoContainer onClick={() => navigate('/')}>
                    <Logo src={logo} />
                </LogoContainer>
            
            </Navbar>
            <SideBar showBar={showBar}  />
        </>
        )
}