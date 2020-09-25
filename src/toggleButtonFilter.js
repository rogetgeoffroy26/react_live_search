import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import {ToggleButton} from '@appbaseio/reactivesearch';

export default class ToggleButtonComponent extends Component {
    render() {
        return (
            <div>
                <ToggleButton
                    componentId="MeetupTops"
                    dataField="group_topics.topic_name.raw"
                    data={
                        [{"label": "Social",   "value": "Social"},
                        {"label": "Travel",   "value": "Travel"},
                        {"label": "Outdoors", "value": "Outdoors"}]
                    }
                    title="Meetups"
                    defaultValue={["Social"]}
                    multiSelect={true}
                    showFilter={true}
                    filterLabel="City"
                    URLParams={false}
                />
            </div>
        );
    }
}
