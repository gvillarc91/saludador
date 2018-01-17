import React, { Component } from 'react';

//Custom components
import Auxiliar from './Auxiliar';
import Sayhello from './Sayhello';
import VisitorForm from './VisitorForm';
import HistoricalGreetings from './HistoricalGreetings';

//React-bootstrap
import { Grid, Row, Col, Panel } from 'react-bootstrap';

//Axios
import axios from '../axios-countries';

//Grid styling
import '../assets/css/bootstrap-grid.css';

class MainContainer extends Component {

    constructor() {

        super();
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    state = {
        countries: [],
        history: [],
        name: null,
        age: null,
        selectedCountry: null,
        candidate: 'Gastón'
    }

    componentWillMount() {
        axios.get('/all')
            .then(response => {
                this.setState({ countries: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    handlerSubmit(data) {

        let historicalUpdated = this.state.history.slice();
        historicalUpdated.push(data);
        this.setState({ history: historicalUpdated, name: data.name, age: data.age, selectedCountry: data.selectedCountry });
    }

    handlerClick(elem) {
        this.setState({ name: elem.name, age: elem.age, selectedCountry: elem.selectedCountry });
    }

    render() {

        return (
            <Auxiliar>
                <Grid>
                    <Row>
                        <Col xs={12} md={12} lg={12} >
                            <h1 className="text-center">Ejercicio</h1>
                            <h3 className="text-center">Nombre:<span> {this.state.candidate} </span></h3>
                        </Col>
                    </Row>
                </Grid>
                <Grid className="container MainContainer">
                    <Row>
                        <Col xs={12} md={6} lg={6} >
                            <VisitorForm onChangeName={this.handlerChangeName}
                                onChangeCountry={this.handlerChangeCountry}
                                onChangeAge={this.handlerChangeAge}
                                submitHandler={this.handlerSubmit}
                                countries={this.state.countries}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={6} >
                            <Panel>
                                <Panel.Heading>Historical Visitants</Panel.Heading>
                                <Panel.Body>
                                    <HistoricalGreetings historical={this.state.history} hiAgain={this.handlerClick} />
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={6} >
                            <Sayhello {...this.state} />;
                        </Col>
                    </Row>


                </Grid>
            </Auxiliar>
        );
    }
}

export default MainContainer;