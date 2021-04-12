import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import mighty from '../assets/Penguins.jpg';
import "./navigasi.css";
import "./contentBody/respnsif/respnsif.css"


const Navigasi = () => {
    // const border = {
    //     border: "dashed"
    // }
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item position-relative hilang">
                            <a href="#" className="nav-link ">
                                <i className="bi bi-bell-fill position-absolute top-50 start-0 translate-middle-y">
                                </i>
                            </a>
                        </li>
                        {/* <li className="nav-item muncul">
                            <a href="#" className="nav-link position-relative">
                                <i className="bi bi-list"></i>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="#" className="nav-link position-relative">
                            </a>
                        </li>
                        <li className="nav-item hilang">
                            <a className="nav-link navbar-nav" aria-current="page" href="#">
                                <img src={mighty} className="rounded-circle gambar-nav nav-item" alt="Profile" />
                            </a>
                        </li>
                        <li className="nav-item position-relative hilang">
                            <a href="#" className="nav-link navbar-nav " aria-current="page">
                                <i className="bi bi-chevron-down position-absolute top-50 start-50 translate-middle"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link position-relative">
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link position-relative">
                            </a>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    );
};

export default Navigasi;