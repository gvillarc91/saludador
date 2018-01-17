import React from 'react';

//Custom components
import Auxiliar from './Auxiliar';

//React-bootstrap
import { Panel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';



const historicalGreetings = (props) => {
    return (
        <Auxiliar className="HistoricalGreeetings">
            {props.historical != null && props.historical.map((elem, index) =>
                <Row key={index}>
                    <Col xs={12} md={12} lg={12} >
                        <p>{elem.name + '-' + elem.selectedCountry + '-' + elem.age}</p>
                    </Col>
                </Row>)

            }
        </Auxiliar>
    );
}

export default historicalGreetings;