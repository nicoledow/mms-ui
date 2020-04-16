import React from 'react';

export default class BedroomsForm extends React.Component {

    submitForm = e => {
        e.preventDefault();
        const data = {
            numOfBedrooms: document.querySelector('select').value,
            numOfFloors: document.querySelector('input[type=number').value,
            elevator: document.querySelector('input[type=checkbox]').checked,
            infoType: 'bedroom and elevator info'
        };
        this.props.updateStep();
        this.props.saveData(data);
    }

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={e => this.submitForm(e)}>
                    <label className="formDiv__form--label">
                        How many bedrooms are you moving?
                        <select name="numOfBedrooms" className="formDiv__form--select">
                            <option value="1">Studio or one-bedroom apartment</option>
                            <option value="2">Two bedroom home or apartment</option>
                            <option value="3">Three bedroom home or apartment</option>
                            <option value="4">Four or more bedrooms</option>
                        </select>
                    </label>
                    <br/>
                    <label className="formDiv__form--label">
                        How many floors?
                        <input type="number" name="numOfFloors" />
                    </label>
                    <br/>
                    <label className="formDiv__form--label">
                        Is there an elevator?
                        <input type="checkbox" name="elevator" />
                    </label>
                    <button className="formDiv__form--button" type="submit">Next</button>
                </form>
            </div>
        )
    }
}