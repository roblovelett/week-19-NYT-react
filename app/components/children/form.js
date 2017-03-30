import React from 'react';

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			term: "",
			startDate:"",
			endDate:""
		};
        this.Change = this.Change.bind(this);       
        this.Click = this.Click.bind(this);
	};

	Change(event) {
		let newState = {};
        newState[event.target.id] = event.target.value; //sets property of new state id="val": "input value"
		this.setState(newState);
	};

    Click(event) {
        console.log("Click /n", this.state.term, this.state.startDate, this.state.endDate);
        this.props.setTerm(this.state.term);
        this.props.setStartDate(this.state.startDate);
        this.props.setEndDate(this.state.endDate);
    };

	render(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Query</h3>
				</div>
				<div className="panel-body text-center">
					<form>
                        <div className="form-group">
                            <h4 className=""><strong>Search for?</strong></h4>
                            <input type="text" className="form-control text-center" id="term" onChange= {this.Change} required/>
                            <br />
                            <h4 className=""><strong>From (for dates, Jan 1 2017 is 20170101)</strong></h4>
                            <input type="text" className="form-control text-center" id="startDate" onChange= {this.Change} required/>
                            <br />
                            <h4 className=""><strong>To (must be after "From"" date. For dates Dec 1 2017 is 20171201)</strong></h4>
                            <input type="text" className="form-control text-center" id="endDate" onChange= {this.Change} required/>
                            <br />
                            <button type="button" className="btn btn-primary" onClick={this.Click}>Submit</button>
                        </div>
					</form>
				</div>
			</div>
		);
	};
};

export default Form; //export component for global use