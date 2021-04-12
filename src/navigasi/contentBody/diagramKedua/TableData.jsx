import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const TableData = () => {
    return (
        <>
            <div className="container">
                <div className="row card-body">
                    <table className="table">
                        <tbody >
                            <tr>
                                <th scope="row" style={{ fontSize: "14px" }}>Negara</th>
                                <th scope="row" className="text-end" style={{ fontSize: "14px" }}>Positif</th>
                                <th scope="row" className="text-end" style={{ fontSize: "14px" }}>Negatif</th>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit.</td>
                                <td className="text-end">8.000.000</td>
                                <td className="text-end">c</td>
                            </tr>
                        </tbody>

                        {/* <caption>
                            <p style={{ fontSize: "14px" }, { display: "inline-block" }}>Negara</p>
                            <p className="text-end" style={{ fontSize: "14px" }, { display: "inline-block" }}>REAL-TIME DATA  <i className="bi bi-chevron-right"></i></p>
                        </caption> */}
                    </table>
                </div>
                <div className="d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight" style={{ fontSize: "14px" }}>Last 7 days <i className="bi bi-caret-down-fill"></i></div>
                    <div className="p-2 bd-highlight" style={{ fontSize: "14px" }, { display: "inline-block" }}>REAL-TIME DATA  <i className="bi bi-chevron-right"></i></div>
                </div>
            </div>
        </>
    );
}

export default TableData;
