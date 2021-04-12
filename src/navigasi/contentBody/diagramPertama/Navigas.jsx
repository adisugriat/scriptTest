import React, { useState } from 'react';
import "../respnsif/respnsif.css"

const Navigas = () => {
    const [progres, setProgres] = useState({
        value: 0
    });

    return (
        <div className="container">
            <div className="row hilang">
                <ul className="nav flex-column nav-pills mb-3">
                    <li className="nav-item">
                        <h6 className="nav-link">Data Covid-19</h6>
                    </li>
                </ul>
                <div className="progress" style={{ height: "3px" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: progres.value + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="col-sm">
                    <button type="button" className="btn btn-light" onClick={() => {
                        setProgres({
                            value: 25
                        })
                    }
                    }>Lorem ipsum dolor sit amet.</button>
                </div>
                <div className="col-sm">
                    <button type="button" className="btn btn-light" onClick={() => {
                        setProgres({
                            value: 50
                        })
                    }
                    }>Lorem ipsum dolor sit amet.</button>
                </div>
                <div className="col-sm">
                    <button type="button" className="btn btn-light" onClick={() => {
                        setProgres({
                            value: 75
                        })
                    }
                    }>Lorem ipsum dolor sit amet.</button>
                </div>
                <div className="col-sm">
                    <button type="button" className="btn btn-light" onClick={() => {
                        setProgres({
                            value: 100
                        })
                    }
                    }>Lorem ipsum dolor sit amet.</button>
                </div>
            </div>
        </div>
    );
}

export default Navigas;
