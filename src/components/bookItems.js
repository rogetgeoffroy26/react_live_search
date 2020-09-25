import React, { Component } from 'react'
//import PropTypes from 'prop-types';
import axios from 'axios';

//axios.get('https://jsonplaceholder.typicode.com/users')
export default class BookItems extends Component {
    // State will apply to the posts object which is set to loading by default
    state = {
        posts: [],
        isLoading: true,
        errors: null,
        value: ''
    };
    // Now we're going to make a request for data using axios
    getPosts() {
        axios
        // This is where the data is hosted
        //.get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
        .get('https://jsonplaceholder.typicode.com/users')
        // Once we get a response and store data, let's change the loading state
        .then(response => {
            this.setState({
            posts: response.data,
            isLoading: false
            });
        })
        // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
        this.getPosts();
    }
    // Putting that data to use
    render() {
        const { isLoading, posts } = this.state;
        return (
        <React.Fragment>
            <h2>Random Post</h2>
            <div>
            {!isLoading ? (
                posts.map(post => {
                //const { _id, title, content } = post;
                return (
                    /* 
                    <div key={_id}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    */
                    <div key={post.id}>
                    <h2>{post.name}</h2>
                    <p>{post.email}</p>
                    <hr />
                    </div>
                );
                })
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </React.Fragment>
        );
    }
 }
 
