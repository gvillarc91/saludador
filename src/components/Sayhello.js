import React from 'react';

//React-bootstrap
import { Well } from 'react-bootstrap';

//Moment.js
import moment from 'moment';

//Currying functions
const sum = number => {
    return anotherNumber => { number + anotherNumber }
}

const addOne = sum(+1);

const sayHello = (props) => {
    let birthDate = moment(props.age).format('YYYY-MM-DD');
    let day = moment(props.age).date();
    let month = addOne(moment(props.age).month());
    let years = moment().diff(birthDate, 'years') + 1;

    let wellContainer = <Well bsSize="large"><h1 className="text-center">Sayhier!</h1></Well>;

    if (props.name != null && props.selectedCountry != null && props.age != null) {
        wellContainer = (<Well bsSize="large">
            <h4> Hola {props.name} de {props.selectedCountry}. </h4>
            <h4>El día {day} del mes {month} tendrás {years} años. </h4>
        </Well>);
    }

    return (
        wellContainer
    );
}

export default sayHello;