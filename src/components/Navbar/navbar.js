
import './styles.css';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import logo from '../../styles/assets/images/instasorteioLogo.svg'

const Navbar = (props) => {
    
    useEffect(() => {         
        
    }, [])


    return (
      <nav className="navbar navbar-expand-lg" aria-label="Eighth navbar example">
        <div className="container">          
          <img src={logo} className="logo-nav"/>
          <div className="btn-container">
            <button type="button" class="btn-custom">Início</button>                   
            <button type="button" class="btn-custom">Como Funciona</button>
          </div>
        </div>
      </nav>

    );
}

export default Navbar;
