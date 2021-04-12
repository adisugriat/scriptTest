import React, { useContext } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DiagramPertama from './diagramPertama';
import DiagramKedua from './DiagramKedua';
import DiagramKetiga from './DiagramKetiga';
import { DataAxis } from './DataAxis';
import "./respnsif/respnsif.css";


const Layout = () => {
    const DataKorona = useContext(DataAxis);
    return (
        <div className="container">
            <div className="row align-items-stretch">
                <div className="col-2 hilang">
                    <ul className="nav flex-column nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <h6 className="nav-link">MANAGE</h6>
                        </li>
                        <li className="nav-item " role="presentation">
                            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="bi bi-person-fill"></i> Profile</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-home" aria-selected="false"><i className="bi bi-bar-chart-line-fill"></i> Analytics</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" type="button" role="tab" aria-controls="pills-home" aria-selected="false"><i className="bi bi-megaphone-fill"></i> Announce</button>
                        </li>
                    </ul>
                </div>
                <div className="col border-start container">
                    {/* <div className="container"> */}
                    <div className="row g-3">
                        <DiagramPertama />
                        <DiagramKedua />
                        <DiagramKetiga />
                    </div>
                    {console.log(DataKorona[0])}


                </div>
            </div>
        </div>
    );
}

export default Layout;
