import React, { Component } from 'react';
import { FormControl, ControlLabel, Grid, Row, Col, FormGroup, Button } from 'react-bootstrap';

class VisitorForm extends Component {

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.initialState = Object.assign({},this.state);
  }

  state = {
    age: '',
    name: '',
    selectedCountry: ''
  }


  handlerSubmit(e) {
    
    e.preventDefault();

    let formData = {
      age: this.state.age,
      name: this.state.name,
      selectedCountry: this.state.selectedCountry
    }

    this.props.submitHandler(formData);
    
  }

  //Handles changes of control forms
  linkState = key => {
    return event => {
      this.setState({
        [key]: event.target.value
      });
    };
  }

  render() {

    let countries = this.props.countries.map(country => <option key={country.alpha2Code} onChange={this.handleControl} >{country.name}</option>);
    return (
      <form>
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter your name"
                inputRef={(ref) => { this.inputName = ref }}
                value={this.state.name}
                onChange={this.linkState('name')}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} lg={12}>
              <FormGroup>
                <ControlLabel>Country</ControlLabel>
                <select className="form-control"
                  ref={(ref) => { this.inputCountry = ref }}
                  value={this.state.selectedCountry}
                  onChange={this.linkState('selectedCountry')}
                  disabled={countries == ''}
                >
                  <option disabled>Countries</option>
                  {countries}
                </select>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={12} lg={12} >
              <ControlLabel>Age</ControlLabel>
              <FormControl
                type="date"
                placeholder="Enter your age"
                value={this.state.age}
                inputRef={(ref) => { this.inputAge = ref }}
                onChange={this.linkState('age')}
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} lg={12} >
              <FormGroup>
                <Button className="pull-right" bsStyle="primary"
                  onClick={this.handlerSubmit}
                  disabled={this.state.name == '' ||
                    this.state.age == '' ||
                    this.state.selectedCountry == ''}
                >Say Hi</Button>
              </FormGroup>
            </Col>
          </Row>

        </Grid>
      </form>
    );
  }
}

export default VisitorForm;