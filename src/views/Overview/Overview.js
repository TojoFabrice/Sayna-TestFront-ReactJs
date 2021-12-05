import React from 'react'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'
import Cards from './cards/Cards'
import Header from './entete/Header'
import {
    CButton
} from '@coreui/react'
import { BsCursor } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Overview() {
    const dataCircle1 = [20, 80]
    const dataCircle2 = [10, 90]

    return (
        <div style={{ height: window.innerHeight, overflow: "scroll" }}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }}>
                <Header />
            </div>

            <div style={{marginTop:15}}>
                <div>
                    <Carousel breakPoints={breakPoints}>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </Carousel>
                </div>


                <div className="col-lg-12" style={{ display: "flex", marginTop: 60 }}>
                    <div className='col-lg-6' style={{ borderRight: '1px solid #E7E7E7', display: "flex", flexDirection: 'column' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', paddingLeft: 100 }}>
                            <div style={{ width: 68 }}>
                                <DoughnutChart dataCircle={dataCircle1} labelChart='Credit limit' valChart="2000" />
                            </div>
                            <div style={{ width: 68 }}>
                                <DoughnutChart dataCircle={dataCircle2} labelChart='Online limit' valChart="1500" />
                            </div>
                        </div>
                        <span style={{ alignSelf: "center", height: 1, width: '83%', backgroundColor: "#E7E7E7", marginTop: 26 }}></span>
                        <div style={{ display: 'grid', gridTemplateColumns: '60% 30%', paddingLeft: 60, overflow: "hidden", height: 40, marginTop: 26 }}>
                            <div style={{ fontWeight: "bold" }}>
                                Int. Payements
                            </div>
                            <div style={{ display: "flex", justifyContent: "end", color: '#717A90' }}>
                                The last 30 days
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: '25% 25% 25% 25%', width: "83%", alignSelf: "center", marginTop: 20 }}>
                            <div style={{ borderLeft: "1px solid #E7E7E7", borderRight: '1px solid #E7E7E7', paddingTop: 20, paddingBottom: 20 }}>
                                <h4 style={{ textAlign: "center" }}><b>8</b></h4>
                                <div style={{ textAlign: "center", color: '#717A90' }}>
                                    Awaiting
                                </div>
                            </div>
                            <div style={{ display: "block", borderRight: '1px solid #E7E7E7', paddingTop: 20, paddingBottom: 20 }}>
                                <div style={{
                                    position: "relative",
                                    right: 8,
                                    width: 20,
                                    height: 20,
                                    backgroundColor: "#E83E5D",
                                    color: "#fff",
                                    textAlign: "center",
                                    borderRadius: 20,
                                    marginTop: -15,
                                    marginLeft: 0,
                                    float: "right"
                                }}>!</div>
                                <h4 style={{ textAlign: "center" }}><b style={{ marginLeft: 26 }}>5</b></h4>
                                <div style={{ textAlign: "center", color: '#717A90' }}>
                                    In Progress
                                </div>
                            </div>
                            <div style={{ borderRight: '1px solid #E7E7E7', paddingTop: 20, paddingBottom: 20 }}>
                                <h4 style={{ textAlign: "center" }}><b>12</b></h4>
                                <div style={{ textAlign: "center", color: '#717A90' }}>
                                    Completed
                                </div>
                            </div>
                            <div style={{ borderRight: '1px solid #E7E7E7', paddingTop: 20, paddingBottom: 20 }}>
                                <h4 style={{ textAlign: "center" }}><b>4</b></h4>
                                <div style={{ textAlign: "center", color: '#717A90' }}>
                                    Canceled
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-lg-6' >
                        <div style={{ display: 'grid', gridTemplateColumns: '60% 25%', paddingLeft: 100, overflow: "hidden", height: 40, paddingTop: 4 }}>
                            <div style={{ fontWeight: "bold", marginTop: 8 }}>
                                Recent Activity
                            </div>
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <CButton className="btnHover" style={{ backgroundColor: "#F1F3FA", color: "#7E8185", border: "none", fontSize: 13, width: 130 }}>View a report</CButton>
                            </div>
                        </div>
                        <div style={{ marginLeft: 100, fontSize: 13, color: '#717A90', marginTop: 25 }}>Today</div>

                        <div style={{ display: 'grid', gridTemplateColumns: '7% 53% 25%', paddingLeft: 100, overflow: "hidden", marginTop: 30 }}>
                            <BsCursor className="effetClick" style={{ marginTop: 12, fontSize: 25, cursor: "pointer" }} />
                            <div style={{}}>
                                <div style={{ color: '#636A7B' }}>
                                    To MArtin Michel
                                </div>
                                <div style={{ color: "#A9AEBC" }}>
                                    Sent
                                </div>
                            </div>
                            <div style={{ marginTop: 7, color: '#636A7B', display: "flex", justifyContent: "end" }}>
                                - 3,004.52  <span style={{ fontWeight: 'bold' }}> USD</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '7% 53% 25%', paddingLeft: 100, overflow: "hidden", marginTop: 20 }}>
                            <BsCursor className="effetClick" style={{ marginTop: 12, fontSize: 25, cursor: "pointer" }} />
                            <div style={{}}>
                                <div style={{ color: '#636A7B' }}>
                                    To Jane Klamberberg
                                </div>
                                <div style={{ color: "#A9AEBC" }}>
                                    Sent
                                </div>
                            </div>
                            <div style={{ marginTop: 7, color: '#636A7B', display: "flex", justifyContent: "end" }}>
                                - 1,023.13  <span style={{ fontWeight: 'bold' }}> USD</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '7% 53% 25%', paddingLeft: 100, overflow: "hidden", marginTop: 20 }}>
                            <BsCursor className="effetClick" style={{ marginTop: 12, fontSize: 25, cursor: "pointer" }} />
                            <div style={{}}>
                                <div style={{ color: '#636A7B' }}>
                                    EUR to USD
                                </div>
                                <div style={{ color: "#A9AEBC" }}>
                                    Conversion
                                </div>
                            </div>
                            <div style={{ marginTop: 7, color: '#636A7B', display: "flex", justifyContent: "end" }}>
                                + 1,456.00  <span style={{ fontWeight: 'bold' }}> USD</span>
                            </div>
                        </div>


                        <div style={{ marginLeft: 100, fontSize: 13, color: '#717A90', marginTop: 25 }}>Yesterday</div>

                        <div style={{ display: 'grid', gridTemplateColumns: '7% 53% 25%', paddingLeft: 100, overflow: "hidden", marginTop: 30 }}>
                            <BsCreditCard2Back className="effetClick" style={{ marginTop: 12, fontSize: 25, cursor: "pointer" }} />
                            <div style={{}}>
                                <div style={{ color: '#636A7B' }}>
                                    Starbucks
                                </div>
                                <div style={{ color: "#A9AEBC" }}>
                                    Cafe & Restaurants
                                </div>
                            </div>
                            <div style={{ marginTop: 7, color: '#636A7B', display: "flex", justifyContent: "end" }}>
                                - 5.99 <span style={{ fontWeight: 'bold' }}> USD</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '7% 53% 25%', paddingLeft: 100, overflow: "hidden", marginTop: 20 }}>
                            <BsCreditCard2Back className="effetClick" style={{ marginTop: 12, fontSize: 25, cursor: "pointer" }} />
                            <div style={{}}>
                                <div style={{ color: '#636A7B' }}>
                                    Deposit to your USD balance
                                </div>
                                <div style={{ color: "#A9AEBC" }}>
                                    Opened
                                </div>
                            </div>
                            <div style={{ marginTop: 7, color: '#636A7B', display: "flex", justifyContent: "end" }}>
                                4,000.00  <span style={{ fontWeight: 'bold' }}> USD</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '7% 53% 25%', paddingLeft: 100, overflow: "hidden", marginTop: 20 }}>
                            <BsCreditCard2Back className="effetClick" style={{ marginTop: 12, fontSize: 25, cursor: "pointer" }} />
                            <div style={{}}>
                                <div style={{ color: '#636A7B' }}>
                                    Deposit to your USD balance
                                </div>
                                <div style={{ color: "#A9AEBC" }}>
                                    Opened
                                </div>
                            </div>
                            <div style={{ marginTop: 7, color: '#636A7B', display: "flex", justifyContent: "end" }}>
                                4,000.00  <span style={{ fontWeight: 'bold' }}> USD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Overview
