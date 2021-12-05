import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


const DoughnutChart = ({ dataCircle,labelChart,valChart }) => {

    const data = {
        labels: '',
        datasets: [
            {
                data: dataCircle,
                backgroundColor: ["#fff", '#303777'],
                borderColor: "#303777",
                borderWidth: 1,
                cutoutPercentage: 80,
                percentageInnerCutout: 40
            },
        ],
    }

    return (
        <div style={{ display: "flex" }}>
            <Doughnut data={data} height="20px" width="20px" />
            <div style={{
                minWidth: 130,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div  style={{fontWeight:"500"}}>
                    {labelChart}
                </div>
                <div style={{color:"#303777",fontWeight:"bold"}}>
                    1500 <span style={{fontSize:9,color:"#727272",fontWeight:"300"}}>/ {valChart} USD</span>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart