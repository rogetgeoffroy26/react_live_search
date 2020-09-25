import React, { Component } from 'react';
import '../css/search.css';
import axios from 'axios';
import Loader from '../loader.gif';
//import PageNavigation from './pageNavigation';

export default class Search extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: [],
			loading: false,
			message: '',
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
		};

		this.cancel = '';
	}


	/**
	 * Get the Total Pages count.
	 *
	 * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPageCount = ( total, denominator ) => {
		const divisible	= 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
	};

	/**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	fetchSearchResults = ( query ) => {
		//const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		//const pageNumber = updatedPageNo ? `&start=${updatedPageNo}` : '';

		//const searchUrl = `https://pixabay.com/api/?key=18255850-16d32335bc5b9c156925ab6b5&q=${query}${pageNumber}`;
		//const searchUrl = `https://pixabay.com/api/?key=18255850-16d32335bc5b9c156925ab6b5&q=${query}`;
		//const searchUrl = `https://jsonplaceholder.typicode.com/users?q=${query}`;
		const searchUrl = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
		//const searchUrl = `https://source.unsplash.com/featured/?${query};`
		//const searchUrl = `https://api.unsplash.com/search/photos/?${pageNumber}&query=${query}`;
		//const searchUrl = `https://www.googleapis.com/customsearch/v1/?q=${query}&${pageNumber}&searchType=image&key=AIzaSyCFRSbSTcTdOhZtEk6mrBBCibQMzWqAFlQ&cx=97095e5db09fb636d`


		axios.get( searchUrl )
			.then( res => {
				this.setState( {
					//results: res.data.hits,
					results: res.data,
					loading: false
				} )
			} )
			.catch( error => {
				if ( axios.isCancel(error) || error ) {
					this.setState({
						loading: false,
						message: 'Failed to fetch the data. Please check network'
					})
				}
			} )
	};

	handleOnInputChange = ( event ) => {
		const query = event.target.value;
		if ( ! query ) {
			this.setState( { query, results: [], message: ''} );
		} else {
			this.setState( { query, loading: true, message: '' }, () => {
				this.fetchSearchResults( query );
			} );
		}
	};

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */


	renderSearchResults = () => {
		const { results } = this.state;

		if ( Object.keys( results ).length && results.length ) {
			return (
				<div className="results-container">
					<ul>
					{ results.map((result) => {
						console.log(result.title);
						return (
							<li key={ result.id }>
								<span><strong>Title:</strong> { result.title }</span><br />
								<span><strong>Body:</strong> { result.body }</span>
							</li>
						);
					} ) }
					</ul>
				</div>
			)
		}
	};

	render() {
		//const { query, loading, message, currentPageNo, totalPages } = this.state;
		const { query, loading, message } = this.state;

		//const showPrevLink = 1 < currentPageNo;
		//const showNextLink = totalPages > currentPageNo;

		return (
			<div className="container">
			{/*	Heading*/}
			{/*<h2 className="heading">Live Search: React Application</h2>*/}
			{/* Search Input*/}
			<label className="search-label" htmlFor="search-input">
				<input
					type="text"
					name="query"
					value={ query }
					id="search-input"
					placeholder="Search..."
					onChange={this.handleOnInputChange}
				/>
				<i className="fa fa-search search-icon" aria-hidden="true"/>
			</label>

			{/*	Error Message*/}
				{message && <p className="message">{ message }</p>}

			{/*	Loader*/}
			<img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>

			{/*Navigation*/}
			{/*<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ () => this.handlePageClick('prev', this.event )}
				handleNextClick={ () => this.handlePageClick('next', this.event )}
			/>*/}

			{/*	Result*/}
			{ this.renderSearchResults() }

			{/*Navigation*/}
			{/*<PageNavigation
				loading={loading}
				showPrevLink={showPrevLink}
				showNextLink={showNextLink}
				handlePrevClick={ () => this.handlePageClick('prev', this.event )}
				handleNextClick={ () => this.handlePageClick('next', this.event )}
			/>*/}

			</div>
		)
	}
}

//export default Search