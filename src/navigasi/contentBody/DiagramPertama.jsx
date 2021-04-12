import React, { useContext } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DiagramKiri from './diagramPertama/DiagramKiri';
import Navigas from './diagramPertama/Navigas';
import GrafikBatang from './diagramPertama/GrafikBatang';
import { DataAxis } from './DataAxis';
import "./respnsif/respnsif.css"
import Jumbotrone from './Jumbotrone';

const DiagramPertama = () => {
    const { terkompirmasi, negara, sembuh, meninggal } = useContext(DataAxis);
    return (
        <div className="container overflow-hidden">
            <div className="row g-3">
                <div className="col-8">
                    <div className="hilang">

                        <Navigas />
                    </div>
                    <div className="navbar-toggler">
                        <Jumbotrone />

                    </div>

                    <DiagramKiri />
                </div>
                <div className="col">
                    <ul className="nav flex-column nav-pills mb-3">
                        <li className="nav-item">
                            <h6 className="nav-link">Data Covid-19</h6>
                        </li>
                    </ul>
                    <div className="card text-white bg-primary mb-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <p className="card-title">Data Covid-19</p>
                            <h2 className="mb-4 fw-light">479</h2>
                            <p className="card-text border-bottom fw-lighter font-size">Data per hari</p>
                            <GrafikBatang />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="font-size">Data per Negara</td>
                                        <td className="font-size text-end">Jumlah</td>
                                    </tr>
                                    <tr>
                                        <td className="font-size">{negara[0]}</td>
                                        <td className="font-size text-end">200</td>
                                    </tr>
                                    <tr>
                                        <td className="text-light"></td>
                                        <td className="font-size text-end">REAL-TIME DATA  <i className="bi bi-chevron-right"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagramPertama;