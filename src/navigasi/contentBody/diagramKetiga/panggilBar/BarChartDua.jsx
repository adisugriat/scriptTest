import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChartDua extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "bar"
                },
                stroke: {
                    show: false
                },
                // dataLabels: {
                //     enabled: false
                // },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        borderRadius: 8,
                        horizontal: false,
                    },
                },
                yaxis: [
                    {
                        showAlways: false,
                        show: false,
                    },
                    {
                        opposite: true,
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: false,
                            color: "#247BA0"
                        },
                    }
                ],
                legend: {
                    show: false,
                    position: 'left',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            },
            series: [
                {
                    name: "series-1",
                    // data: [30, 40, 45, 50, 49, 60, 70, 91]
                    data: []
                },
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                },
                // {
                //     name: "series-1",
                //     data: [30, 40, 45, 50, 49, 60, 70, 91]
                // }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="800"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarChartDua;