import React from 'react';
import Header from './Header';
import HeaderImg from './HeaderImg';
import Form from './Form';

export default class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            formBegun: false
        }
    }

    begin = () => {
        this.setState({ formBegun: true });
    }

    render() {
        if (this.state.formBegun) {
            return(
                <div>
                    <HeaderImg />
                    <Form />
                </div>
            )
        } else {
            return <Header begin={this.begin}/>
        }
    }
}
