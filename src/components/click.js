import React, { Component } from 'react';
import '../css/click.css';


export default class Click extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
            {name: 'Name 1', id: 133},
            {name: 'Name 2', id: 456}
          ]
        }
    }
      
    getComponent = (d, e) => {
        function getEven(num){
            let count = 0;
            while (num){
                count += num % 2 === 0;
                num = Math.floor(num/10);
            }
            return count;
        }

        //Set Style
        if (getEven(d.id)) {
        //if (d.id === 456 ) {
            e.currentTarget.style.background = 'black'
            e.currentTarget.style.color = 'white'
        }
        
    }
      
    render() { 
        return(       
            <div className="click-event-list">
                <ul>
                    {this.state.data.map(d => {
                        return(
                            <li key={d.id} onClick={this.getComponent.bind(this, d)}>{d.name}</li>
                        )}
                    )}
                </ul>
            </div>
        );
    }

}