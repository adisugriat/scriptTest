import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    height: 150,
                    type: "bar",
                    stacked: false,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#FF1654"],
                series: [
                    {
                        name: "Series A",
                        // data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                        data: [0, 4.6]
                    },
                ],
                stroke: {
                    width: 50
                },
                plotOptions: {
                    bar: {
                        columnWidth: '25%',
                        // distributed: true,
                    }
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: [
                    {
                        showAlways: false,
                        show: false,
                        // axisTicks: {
                        //     show: false
                        // },
                        // axisBorder: {
                        //     show: false,
                        //     color: "#FF1654"
                        // },
                        // labels: {
                        //     style: {
                        //         colors: "#FF1654"
                        //     }
                        // },
                        // stroke: {
                        //     width: 60,
                        // curve: 'straight',
                        // dashArray: [0, 8, 5]
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
                    show: false
                    // horizontalAlign: "left",
                    // offsetX: 40
                }
            }
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.options.series}
                            type="bar"
                            width="700"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default BarChart;