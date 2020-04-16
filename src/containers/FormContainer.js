import React from 'react';
import { connect } from 'react-redux';

import LocationForm from '../components/LocationForm';
import BedroomsForm from '../components/BedroomsForm';
import ParkingForm from '../components/ParkingForm';
import CustomerContactForm from '../components/CustomerContactForm';
import CalculatingMessage from '../components/CalculatingMessage';
import QuoteDisplay from '../components/QuoteDisplay';

import saveData from '../actions/saveData';
//import getEstimate from '../actions/getEstimate';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1
        }
    }

   updateStep = () => {
       this.setState(prevState => {
           return { step: prevState.step + 1 }
       })
   }

    render() {
        if (this.props.completeState.quote) {
            return <QuoteDisplay quote={this.props.completeState.quote} />
        }

        switch(this.state.step){
            case 1:
                return <LocationForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 2:
                return <BedroomsForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 3:
                return <ParkingForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 4:
                return <CustomerContactForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 5:
                return <CalculatingMessage data={this.props.completeState} />
            default:
                return <h3>An error occurred.</h3>
        }
       
    }
}

const mapStateToProps = state => {
    return { completeState: state };
}

const mapDispatchToProps = dispatch => {
    return {
        saveData: customerInfo => dispatch(saveData(customerInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
