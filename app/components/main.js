import React from 'react';
import Form from './children/form';
import Results from './children/results'
import Helpers from './util/helpers';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            startDate: "",
            endDate: "",
            results: ""
        };
        this.setTerm = this.setTerm.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.setEndDate = this.setEndDate.bind(this);
    };

    setTerm(term) {
        this.setState({
            searchTerm: term
        });
    };
    setStartDate(start) {
        this.setState({
            startDate: start
        });
    };
    setEndDate(end){
        this.setState({
            endDate: end
        });
    };
    
    componentUpdate(prevProps, prevState) {
        if (prevState.searchTerm != this.state.searchTerm) {
            console.log("Updated");
            Helpers.runQuery(this.state.searchTerm,this.state.startDate,this.state.endDate)
                .then((data)=>{
                    if (data != this.state.results) {
                        console.log(data);
                        this.setState({
                            results: data
                        });
                    };
                });
        };
    };

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

export default Main; //export component for global use