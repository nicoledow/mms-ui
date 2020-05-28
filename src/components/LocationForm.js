 import React from 'react';
 import SelectUSState from 'react-select-us-states';
 import validateLocations from '../actions/validateLocations';

 export default class LocationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            startingCity: '',
            destinationCity: '',
            startingState: '',
            destinationState: ''
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

    handleSubmit = async(e) => {
        e.preventDefault();
        
        const data = {
            startingCity: this.state.startingCity,
            destinationCity: this.state.destinationCity,
            startingState: this.state.startingState,
            destinationState: this.state.destinationState,
            infoType: 'customer location'
        };

        let locationsAreValid = await validateLocations(data);
        if (locationsAreValid) {
            this.props.updateStep();
            this.props.saveData(data);
        } else {
            alert('Either your starting location or destination are invalid. Please check and try again.');
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
