import React, { Component } from 'react';
//import '../css/click.css';


export default class Toggle extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggleOne: true,
            isToggleTwo: true
        }

        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(isToggleOne){
        let toggleStatus = this.state[isToggleOne];
        this.setState({
            [isToggleOne]: !toggleStatus
        });
    }

    render(){
        return(
            <div className="container">
                <button onClick={() => this.handleClick('isToggleOne')}>
                    { this.state['isToggleOne'] ? 'ON' : 'OFF' }
                </button>
                <button onClick={() => this.handleClick('isToggleTwo')}>
                    { this.state['isToggleTwo'] ? 'Test' : 'Not Test' }
                </button>
            </div>
        );
    }
}