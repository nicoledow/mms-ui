import React from 'react';

export default class CustomerContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            customerName: '',
            customerEmail: '',
            customerPhone: ''
        }
    }

    handleNameChange = e => {
        let name = e.target.value;
        this.setState({ customerName: name });
    }

    handleEmailChange = e => {
        let email = e.target.value;
        this.setState({ customerEmail: email });
    }

    handlePhoneChange = e => {
        let phoneNum = e.target.value;
        this.setState({ customerPhone: phoneNum });
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            customerName: this.state.customerName,
            customerEmail: this.state.customerEmail,
            customerPhone: this.state.customerPhone,
            infoType: 'customer contact'
        };
        this.props.updateStep();
        this.props.saveData(data);
    }

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={e => this.handleSubmit(e)}>
                        <input type="text" name="customerName" value={this.state.customerName} placeholder="Name" onChange={e => this.handleNameChange(e)} />
                        <input type="text" name="customerEmail" value={this.state.customerEmail} placeholder="Email address" onChange={e => this.handleEmailChange(e)} />
                        <input type="text" name="customerPhone" value={this.state.customerPhone} placeholder="Phone number" onChange={e => this.handlePhoneChange(e)} />
                    <button type="submit" className="formDiv__form--button">Complete</button>
                </form>
            </div>
        )
    }
}