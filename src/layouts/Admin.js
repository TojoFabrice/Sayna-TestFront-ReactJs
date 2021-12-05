import React, {useState} from 'react'
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes'
import styles from './styles'
import message from '../assets/icons/message.svg'
import logo from '../assets/icons/logoKlamma.png'
import { BsMessenger } from "react-icons/bs";

function Admin() {
    const [showMsg, setShowMsg] = useState(false)
    return (
        <div className="wrapper" style={{display:"flex"}}>
            <Sidebar/>
            <div className="main-panel" style={{flex: 1}}>
                <Switch>
                    {routes.map((prop, key) => {
                        return (
                            <Route
                            path={prop.layout + prop.path}
                            component={prop.component}
                            key={key}
                            />
                            );
                        })}
                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
               
            </div>
            <div style={{width:"100%", height:60, background:"#fafbfda3", position:"absolute", bottom:0,paddingTop:50,overflow:"hidden"}}></div>
            {
                showMsg && (
                    <div className="divMess" style={styles.divMessage}>
                        <div style={styles.headerMsg}>
                            <img src={logo} style={{width:28, height:28,marginRight:15,marginTop:5}}/>
                            <h4 style={{color:"#303777", marginTop:10}}>Klamma</h4>
                        </div>
                        <div style={{marginTop:15, textAlign:"center"}}>
                            <h6>Hello! How can I help you?</h6>
                        </div>
                        <div style={styles.btnMsg}>
                            <div style={{width:"90%", height:35, backgroundColor:"#303777", display:"flex",justifyContent:"center",alignItems: 'center',}}>
                                <BsMessenger style={{color:'#fff',marginRight:10}}/>
                                <span style={{fontSize:13, color:"#fff"}}>Continue as (name on messagner)</span>
                            </div>
                        </div>
                    </div>
                )
            }
            
            <div className="effetClick" style={styles.messenger} onClick={() => setShowMsg(!showMsg)}>
                <img src={message} style={{width:25}}/>        
            </div>
        </div>
    )
}

export default Admin
