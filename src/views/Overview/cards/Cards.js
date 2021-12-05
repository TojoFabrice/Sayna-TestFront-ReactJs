import React from 'react'
import logo from '../../../assets/icons/logoKlamma.png'
import './Cards.css'

function Cards() {
    return (
        <div>
            <div className="cards" style={{}}>
                <img src={logo} style={{width:21, height:23}}/>
                <div className="prix">
                    <h5>1242.42 <span style={{fontWeight:"bold"}}>USD</span></h5>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="numCard">
                        <h6>5495 7381 3759 2321</h6>
                        <h6>04 / 24</h6>
                    </div>
                    <div>
                        <div style={{display:"flex",marginRight:20, marginTop:22}}>
                            <div style={{display:'block',width:20, height:20, backgroundColor:"#F66071", borderRadius:10,marginLeft:-15,position:"absolute", opacity:0.8}}></div>
                            <div style={{display:'block',width:20, height:20, backgroundColor:"#FFA522", borderRadius:10}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
