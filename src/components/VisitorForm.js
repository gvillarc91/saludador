import React, { Component } from 'react';
import { FormControl, ControlLabel, Grid, Row, Col, FormGroup, Button } from 'react-bootstrap';
import Auxiliar from './Auxiliar';

class VisitorForm extends Component {

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(e) {
    e.preventDefault();

    let formData = {
      age: this.inputAge.value,
      name: this.inputName.value,
      selectedCountry: this.inputCountry.value
    }
    console.log(formData)
    this.props.submitHandler(formData);
  }

  render() {

    let countries = this.props.countries.map(country => <option key={country.alpha2Code} onChange={this.handleControl} >{country.name}</option>);
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <ControlLabel>Nombre</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter your name"
              inputRef={(ref) => { this.inputName = ref }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={12}>
            <FormGroup>
              <ControlLabel>Pais</ControlLabel>
              <select className="form-control"
                ref={(ref) => { this.inputCountry = ref }}>

                <option disabled>Paises</option>
                {countries}
              </select>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={12} lg={12} >
            <ControlLabel>Edad</ControlLabel>
            <FormControl
              type="date"
              placeholder="Enter your age"
              inputRef={(ref) => { this.inputAge = ref }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} lg={12} >
            <FormGroup>
              <Button className="pull-right" bsStyle="primary"
                onClick={this.handlerSubmit}>Saludar</Button>
            </FormGroup>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default VisitorForm;