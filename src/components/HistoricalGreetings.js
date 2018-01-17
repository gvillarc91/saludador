import React from 'react';

//Custom components
import Auxiliar from './Auxiliar';

//React-bootstrap
import { Row, Col } from 'react-bootstrap';

const linkStyle = {
    cursor: 'pointer'
}

const historicalGreetings = (props) => {
    return (
        <Auxiliar className="HistoricalGreeetings">
            {props.historical != null && props.historical.map((elem, index) =>
                <Row key={index}>
                    <Col xs={12} md={12} lg={12} >
                        <a style={linkStyle} onClick={() => props.hiAgain(elem)}>{elem.name + ' - ' + elem.selectedCountry + ' - ' + elem.age}</a>
                    </Col>
                </Row>)

            }
        </Auxiliar>
    );
}

export default historicalGreetings;