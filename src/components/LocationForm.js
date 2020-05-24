 import React from 'react';
 import SelectUSState from 'react-select-us-states';
 import BASE_URL from '../index'

 export default class LocationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            startingCity: '',
            destinationCity: '',
            startingState: '',
            destinationState: '',
            selectedState: 'New Hampshire',
            locationsAreValid: true
        };
    }

    selectNH = () => {
        const nhOption = document.querySelector('option[value=NH]');
        if (!nhOption.selected) {
            const alabamaOption = document.querySelector('option[value=AL');
            alabamaOption.setAttribute('selected', false);

            nhOption.setAttribute('selected', true);
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

    fetchDistance = data => {
        const startingString = `${data['startingCity']}+${data['startingState']}`;
        const destinationString = `${data['destinationCity']}+${data['destinationState']}`;

        fetch(`${BASE_URL}distance`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ 'start': startingString, 'destination': destinationString })
        })
        .then(resp => resp.json())
        .then(obj => {
            debugger;
            if (obj['result'] !== 'VALID'){
                this.setState({ 'locationsAreValid': false });
                this.alertInvalid();
            } 
        })
    }

    alertInvalid = () => {
        alert('Your starting or ending location is invalid. Please try again.');

        document.querySelectorAll('input').forEach(ele => {
            ele.className = 'alert';
        })

        document.querySelectorAll('select').forEach(ele => {
            ele.className = 'alert';
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            startingCity: this.state.startingCity,
            destinationCity: this.state.destinationCity,
            startingState: this.state.startingState,
            destinationState: this.state.destinationState,
            infoType: 'customer location'
        };
        this.props.updateStep();
        this.fetchDistance(data);
        this.props.saveData(data);
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
