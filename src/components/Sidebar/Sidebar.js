import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import {
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDropdown,
    CSidebarNavItem,
    CImg,
    CNavItem,
    CNavGroup,
    CSidebarToggler
} from '@coreui/react'
import './Sidebar.css'
import NavItem from '../NavItem/NavItem';
import home from '../../assets/icons/icons8-home.svg'
import homeHover from '../../assets/icons/home-hover.svg'
import logo from '../../assets/icons/logoKlamma.png'

function Sidebar() {

    return (
        <CSidebar className="content">
            <CSidebarBrand className="brand">
                <img src={logo} style={{width:28, height:28,marginRight:15,marginTop:5}}/>
                Klamma
            </CSidebarBrand>
            <CSidebarNav style={{ marginTop: 30, 
                display:"flex", 
                flexDirection:"column",
                justifyContent:"space-between",
                height:"85%"    
            }}>
                <div>
                    <NavItem
                        itemName="Overview"
                        icon={home}
                        iconHover={homeHover}
                    />
                    <NavItem
                        itemName="Cards"
                        icon={home}
                        iconHover={homeHover}
                    />
                    <NavItem
                        itemName="Payements"
                        icon={home}
                        iconHover={homeHover}
                    />
                    <NavItem
                        itemName="Repots"
                        icon={home}
                        iconHover={homeHover}
                    />
                </div>
                <div>
                    <NavItem
                        itemName="Settings"
                        icon={home}
                        iconHover={homeHover}
                    />
                    <NavItem
                        itemName="Accounts"
                        icon={home}
                        iconHover={homeHover}
                    />
                </div>
            </CSidebarNav>

        </CSidebar>
    )
}

export default Sidebar
