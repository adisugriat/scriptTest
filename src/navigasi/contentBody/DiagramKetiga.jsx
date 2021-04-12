import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import BarChart from './diagramKetiga/panggilBar/BarChart';
import Navigas from './diagramPertama/Navigas';
import BarChartDua from './diagramKetiga/panggilBar/BarChartDua';
import BarChartTiga from './diagramKetiga/panggilBar/BarChartTiga'

const DiagramKetiga = () => {
    return (
        <div className="container overflow-hidden">
            <div className="row g-3">
                <div className="col">
                    <div className="border">
                        <div className="container">
                            <div className="row">
                                <Navigas />
                                {/* <BarChart /> */}
                                <BarChartDua />
                                {/* <BarChartTiga /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagramKetiga;