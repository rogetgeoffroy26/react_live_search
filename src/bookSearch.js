import React, { Component } from 'react';

import SearchBox from '@appbaseio/react-searchbox';

export default class BookSearch extends Component {
    render() {
        return (
            <div>
                <SearchBox
                    app="good-books-ds"
                    credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
                    //app="rogetdataset-pdqtzdm"
                    //credentials="3soQVdDUV:fd7ada2b-38d4-4186-91a0-4b0c3f6a353c"
                    dataField={['original_title', 'original_title.search']}
                />
            </div>
        );
    }
}