import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './diagramPertama/GrafikBatang.css';
import TableData from './diagramKedua/TableData';

const DiagramKedua = () => {
    return (
        <div className="container overflow-hidden">
            <div className="row g-3">
                <div className="col">
                    <p>Data beberapa Negara yang penduduknya Positif dan Negatif?</p>
                    <div className="border-end border-bottom border-start">
                        <TableData />
                    </div>
                </div>

                <div className="col">
                    <p>Data beberapa Negara yang penduduknya Positif dan Negatif?</p>
                    <div className="border-end border-top border-start">
                        <TableData />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DiagramKedua;
