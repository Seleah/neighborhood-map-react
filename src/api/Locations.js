export const getLocations = () => {
	const CLIENT_ID = "***REMOVED***";
	const CLIENT_SECRET = "***REMOVED***";
	const CLIENT_VERSION = "20181112";

	let fsUrl = `https://api.foursquare.com/v2/venues/explore?cat=food&ll=45.52345,-122.67621&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${CLIENT_VERSION}`;

	return fetch(fsUrl)
	.then(resp => resp.json())
	.then(result => result.response.groups[0].items);
}