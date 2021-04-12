import React, { Component } from "react";
import Chart from "react-apexcharts";
import "../respnsif/respnsif.css";

class DiagramKiri extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 350,
                    type: "line",
                    stacked: false,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#FF1654", "#247BA0"],
                series: [
                    {
                        name: "Series A",
                        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                    },
                    {
                        name: "",
                        data: [20, 29, 37, 36, 44, 45, 50, 58]
                    }
                ],
                stroke: {
                    width: [3, 3],
                    dashArray: [1, 3]
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%"
                    }
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
                },
                yaxis: [
                    {
                        showAlways: false,
                        show: false,
                        axisTicks: {
                            show: false
                        },
                        axisBorder: {
                            show: false,
                            color: "#FF1654"
                        },
                        labels: {
                            style: {
                                colors: "#FF1654"
                            }
                        },
                        stroke: {
                            width: [5, 7, 5],
                            curve: 'straight',
                            dashArray: [0, 8, 5]
                        }
                        // title: {
                        //     text: "Series A",
                        //     style: {
                        //         color: "#FF1654"
                        //     }
                        // }
                    },
                    {
                        opposite: true,
                        axisTicks: {
                            show: false
                        },
                        axisBorder: {
                            show: false,
                            color: "#247BA0"
                        },
                        // labels: {
                        //     style: {
                        //         colors: "#247BA0"
                        //     }
                        // },
                        // title: {
                        //     text: "Series C",
                        //     style: {
                        //         color: "#247BA0"
                        //     }
                        // }
                    }
                ],
                tooltip: {
                    shared: false,
                    intersect: true,
                    x: {
                        show: false
                    }
                },
                legend: {
                    horizontalAlign: "left",
                    offsetX: 40
                }
            }
        };
    }

    render(props) {
        return (
            <div className="app">
                <div className="row classni horizontal-scroll-wrapper squares">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.options.series}
                            type="line"
                            width="620"
                        />
                        <p style={{ fontSize: "12px" }}>Last 7 days <i className="bi bi-caret-down-fill"></i></p>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default DiagramKiri;