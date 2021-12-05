import React, { useState } from 'react'
import {
    CImg,
} from '@coreui/react'

import './NavItem.css'
// import CIcon from '@coreui/icons-react'

function NavItem({ itemName, icon, iconHover }) {
    const [changePicto, setChangePicto] = useState(false)
    console.log(changePicto);
    return (
        <div
            className="item"
            style={{marginBottom:14}}
            onMouseOver={() => setChangePicto(true)}
            onMouseLeave={() => setChangePicto(false)}>

            <img className="home" src={changePicto ? iconHover : icon} style={{ width: 28 }} />
            <div style={{ display: "flex", alignItems: "center" }}>
                <p className="itemText">
                    {itemName}
                </p>
            </div>
        </div>
    )
}

export default NavItem
