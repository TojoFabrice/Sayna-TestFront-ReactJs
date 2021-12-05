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
import userHover from '../../assets/icons/userHover.svg'
import user from '../../assets/icons/user.svg'
import paramHover from '../../assets/icons/paramHover.svg'
import param from '../../assets/icons/param.svg'
import contactsHover from '../../assets/icons/contactsHover.svg'
import contacts from '../../assets/icons/contacts.svg'
import repotHover from '../../assets/icons/repotHover.svg'
import repot from '../../assets/icons/repot.svg'
import cards from '../../assets/icons/cards.svg'
import cardsHover from '../../assets/icons/cardsHover.svg'
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
                        icon={cards}
                        iconHover={cardsHover}
                    />
                    <NavItem
                        itemName="Payements"
                        icon={home}
                        iconHover={homeHover}
                    />
                    <NavItem
                        itemName="Repots"
                        icon={repot}
                        iconHover={repotHover}
                    />
                    <NavItem
                        itemName="Contacts"
                        icon={contacts}
                        iconHover={contactsHover}
                    />
                </div>
                <div>
                    <NavItem
                        itemName="Settings"
                        icon={param}
                        iconHover={paramHover}
                    />
                    <NavItem
                        itemName="Accounts"
                        icon={user}
                        iconHover={userHover}
                    />
                </div>
            </CSidebarNav>

        </CSidebar>
    )
}

export default Sidebar
