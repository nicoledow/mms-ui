 import React from 'react';
 import SelectUSState from 'react-select-us-states';
 import fetchDistance from '../actions/fetchDistance';
 import BASE_URL from '../index';

 export default class LocationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            startingCity: '',
            destinationCity: '',
            startingState: '',
            destinationState: '',
            locationsAreValid: true
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
        
        const data = {
            startingCity: this.state.startingCity,
            destinationCity: this.state.destinationCity,
            startingState: this.state.startingState,
            destinationState: this.state.destinationState,
            infoType: 'customer location'
        };

        fetchDistance(data);
    }

    // validateLocationsAndSaveData = async () => {
    //     this.setState({ locationsAreValid: true })

    //     const data = {
    //         startingCity: this.state.startingCity,
    //         destinationCity: this.state.destinationCity,
    //         startingState: this.state.startingState,
    //         destinationState: this.state.destinationState,
    //         infoType: 'customer location'
    //     };

    //     let locationsValidated = await this.fetchDistance(data);

    //     if (locationsValidated) {
    //         this.props.saveData(data);
    //     } else {
    //         alert('Your starting or ending location is invalid. Please try again.');
    //         // this.setState({ locationsAreValid: false });
    //         this.render();
    //     }
    // }

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
