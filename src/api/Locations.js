// import locations from '../data/locations.json';

export const getLocations = (query) => {
	const CLIENT_ID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID; // ***REMOVED*** 
	const CLIENT_SECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET; // ***REMOVED***
	const CLIENT_VERSION = "20181112";

	query = query || 'ramen';

	let fsUrl = `https://api.foursquare.com/v2/venues/explore?query=${query}&ll=45.52345,-122.67621&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${CLIENT_VERSION}`;

	// let fsUrl2 = '';

	// let fallbackLoc = locations.json();
	let fallback = "Your search cannot be completed due to an error";

	return fetch(fsUrl)
	.then(resp => resp.json())
	.then(result => result.response.groups[0].items)
	.catch((er) => {return fallback;});
}