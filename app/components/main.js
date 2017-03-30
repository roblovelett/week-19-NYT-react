import React from 'react';

class Main extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="text-center">New York Times Mern App</h1>
						<p className="text-center"><em>Enter NYT search topic</em></p>
					</div>
					<div className="col-md-12">
						<Form setTerm={this.setTerm} setStartDate={this.setStartDate} setEndDate={this.setEndDate} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Results results={this.state.results} />
					</div>
				</div>
			</div>
        );
    };
};