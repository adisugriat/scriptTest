import axios from 'axios';
import React, { useEffect, useState, Provider } from 'react';
import { DataAxis } from './navigasi/contentBody/DataAxis';
import Layout from './navigasi/contentBody/Layout';
import Navigasi from './navigasi/Navigasi';

const api = "https://covid19.mathdro.id/api/confirmed";
const App = () => {
    const [dataKorona, setDataKorona] = useState([]);
    const terkompirmasi = [];
    const negara = [];
    const sembuh = [];
    const meninggal = [];

    useEffect(() => {
        axios.get(api)
            .then(res => {
                // console.log(res.data[0].active);
                for (let i = 0; i <= 20; i++) {
                    terkompirmasi.push(res.data[i].active);
                }
                for (let i = 0; i <= 20; i++) {
                    negara.push(res.data[i].countryRegion);
                }
                for (let i = 0; i <= 20; i++) {
                    sembuh.push(res.data[i].recovered);
                }
                for (let i = 0; i <= 20; i++) {
                    meninggal.push(res.data[i].deaths);
                }

            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <DataAxis.Provider value={terkompirmasi, negara, sembuh, meninggal}>
                <Navigasi />
                <Layout />
            </DataAxis.Provider>


        </>
    );
}

export default App;