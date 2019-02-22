import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav' 

class Page extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children} 
            </div>
        );
    }
}

export default Page;