import React from 'react';
import getEstimate from '../actions/getEstimate';
import { connect } from 'react-redux';

class CalculatingMessage extends React.Component {

    componentDidMount() {
        this.props.sendDataForEstimate(this.props.data);
    }

    render() {
        return (
            <div className="formDiv">
                <h3 className="header__p">Calculating your estimate...</h3>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendDataForEstimate: data => dispatch(getEstimate(data)) 
    }
}

export default connect(null, mapDispatchToProps)(CalculatingMessage);