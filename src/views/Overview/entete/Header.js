import React from 'react'
import {
    CButton
} from '@coreui/react'
import { FiBell } from "react-icons/fi";
import './Header.css'

function Header() {
    return (
        <div style={{display:"flex", justifyContent:"space-between", width:"90%"}}>
            <div style={{display:"flex", width:270, justifyContent:"space-between"}}>
                <div>
                    <h4 style={{marginTop:5, fontWeight:"bold"}}>Your Cards</h4>
                </div>
                <div>
                    <CButton className="btnHover" style={{backgroundColor:"#F1F3FA",color:"#7E8185",border:"none", fontSize:13}}>New card <span>+</span></CButton>
                </div>
            </div>
            <div className="notifi">
                <FiBell style={{marginTop:12, marginLeft:13}}/>
            </div>
        </div>
    )
}

export default Header
