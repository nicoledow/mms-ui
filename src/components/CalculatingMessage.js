import React from 'react';
import getEstimate from '../actions/getEstimate';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class CalculatingMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.sendDataForEstimate(this.props.data);
    }

    render() {
        return (
            <div className="formDiv sweet-loading">
                <MoonLoader css={override} size={150} color="silver" loading={this.state.loading} />
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