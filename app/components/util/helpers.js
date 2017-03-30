const axios = require('axios');
const key = "d416ad02441f4b3e92bb0c96a8c3650b";

const helpers = {
  runQuery: function(searchTerm,startDate,endDate) {

		console.log(searchTerm);
		console.log(startDate);
		console.log(endDate);

		//send ajax request to nyt api
		//var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
		//example of query https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a8f898183d584bbebd1a771e82dc4ef3&q=cookies?begin_date=20160701
		//example of query with dates https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a8f898183d584bbebd1a771e82dc4ef3&q=iran&begin_date=20160401&end_date=20160801
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate;

		return axios.get(queryURL)
			.then(function(response){
				console.log(response);
		})
	}  
};