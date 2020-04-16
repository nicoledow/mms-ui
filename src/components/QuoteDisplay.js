import React from 'react';

export default class QuoteDisplay extends React.Component {

    render() {
        return (
            <div className="formDiv">
                <h3 className="header__p"> Your estimated quote is <strong>${this.props.quote}</strong>.<br/>
                MMS will be in contact shortly to answer any questions and discuss the exact cost!</h3>
            </div>
        )
    }
}