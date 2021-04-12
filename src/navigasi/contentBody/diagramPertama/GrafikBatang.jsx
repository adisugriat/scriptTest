import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./GrafikBatang.css";

const GrafikBatang = () => {
    return (
        <>
            <div className="kotak">
                <div className="inline-blk border-start-0 border-primary">
                    <div className="batas-warna-putih" style={{ height: "4px" }}></div>
                    <div className="batas-warna-biru" style={{ height: "2px" }}></div>
                    <div className="batas-warna" style={{ height: "30px" }}></div>
                </div>
                <p style={{ display: "inline-block" }}>.</p>
                <div className="inline-blk border-start-0 border-primary">
                    <div className="batas-warna-putih" style={{ height: "4px" }}></div>
                    <div className="batas-warna-biru" style={{ height: "2px" }}></div>
                    <div className="batas-warna" style={{ height: "80px" }}></div>
                </div>
            </div>
            {/* <div className="kotak">
                <div className="batas-warna" style={{ height: "50px" }}></div>
            </div> */}
        </>
    );
}

export default GrafikBatang;
