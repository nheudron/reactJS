import React from 'react';
import {NavLink} from "react-router-dom";


const Navigation = () => {
  return(
    <div className="navigation">
        <NavLink exact to="/" activeClassName="nav-active">
            Accueil
        </NavLink>
    </div>
)
};

export default Navigation;