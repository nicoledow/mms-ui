 import React from 'react';
 import SelectUSState from 'react-select-us-states';
 import BASE_URL from '../index';
 import verifyLocations from '../actions/verifyLocations';
import getEstimate from '../actions/getEstimate';

 export default class LocationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            startingCity: '',
            destinationCity: '',
            startingState: 'AL',
            destinationState: 'AL'
        };
    }

    handleChange = e => {
        e.target.name === 'startingCity' ? this.setState({ startingCity: e.target.value }) : this.setState({ destinationCity: e.target.value })
    }

    setDepartingStateValue = e => {
       this.setState({ startingState: e });
    }

    setDestinationStateValue = e => {
        this.setState({ destinationState: e });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        function checkFieldsComplete() {
            const cities = [...document.querySelectorAll('input[type=text]')];
            if (cities.find(input => input.value === '')) {
                alert('Please complete all fields and try again.');
            }
        }

        checkFieldsComplete();

        const data = {
            startingCity: this.state.startingCity,
            destinationCity: this.state.destinationCity,
            startingState: this.state.startingState,
            destinationState: this.state.destinationState,
            infoType: 'customer location'
        };

        const startingString = `${data['startingCity']}+${data['startingState']}`;
        const destinationString = `${data['destinationCity']}+${data['destinationState']}`;
        
        if(!verifyLocations(startingString, destinationString)) {
            alert('One or more of your locations is invalid. Please check and try again.');
            return;
        } else {
            this.props.updateStep();
            this.props.saveData(data);
        }
    } 
}


    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={e => this.handleSubmit(e)}>
                    <label className="formDiv__form--label">
                        Starting City:
                        <input type="text" name="startingCity" value={this.state.startingCity} onChange={e => this.handleChange(e)}/>
                    </label>
                    <SelectUSState onChange={e => this.setDepartingStateValue(e)} className="formDiv__form--select" selected={this.state.selectedState}/>
                    <label className="formDiv__form--label">
                        Destination City:
                        <input type="text" name="destinationCity" value={this.state.destinationCity} onChange={e => this.handleChange(e)} />
                    </label>
                    <SelectUSState onChange={e => this.setDestinationStateValue(e)} className="formDiv__form--select" />
                    <button type="submit" className="formDiv__form--button">Next</button>
                </form>
            </div>
        );
    }
 }
