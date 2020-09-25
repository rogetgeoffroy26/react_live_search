import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from "../custom_data/image_search.json";
//import data from "../custom_data/data.json";

//import hits from '../custom_data/image_search.json';
//var jsonData = require('../custom_data/image_search.json');

/*export default class LocalJson extends Component {
    render(){
        return (
            <div className="results-container">
                <ul>
                {jsonData.map(data =>(
                        <li key={data.data_id}>
                            {data.user}
                        </li>
                    )
                )}
                </ul>
            </div>
        );
    }
}*/

//data for post

export default class LocalJson extends Component {
	render() {
		return (
			<div>
				<Container fluid={true}>
					<Row>
						<CardDeck className=" no-gutters ">
							{data.map((postData) => {
								console.log(postData);
								return (
                                    <div>
                                        {postData.hits.map((hit) => {
                                            return(
                                                <div>
                                                    <Card key={hit.id}>
                                                        <Card.Img variant="top" src={hit.previewURL} />
                                                        <Card.Body>
                                                            <Card.Title key={hit.data_id} className="tile">
                                                                {hit.pageURL}
                                                            </Card.Title>
                                                            <Card.Subtitle className="tag">
                                                                {History.id + " "}
                                                            </Card.Subtitle>
                                                            <Card.Text className="para">
                                                                {hit.user}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            );
                                        })}
                                    </div>
								);
							})}
						</CardDeck>
					</Row>
				</Container>
			</div>
		);
	}
}