import React from 'react';
import Article from './grandchildren/article';

class Results extends React.Component{	
	constructor(props){
		super(props);
	};

	render(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">
					<Article article_data={this.props.results} />
				</div>
			</div>
		);
	};
};

export default Results; //export component for global use