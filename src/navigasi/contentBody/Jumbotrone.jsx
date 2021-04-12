import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotrone = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Diagram Covid-19</h1>
                    <p className="lead">Data Covid-19 ini hanya sebagai simulasi data dari <span>https://covid19.mathdro.id/api/confirmed</span></p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbotrone;