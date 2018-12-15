
export const routes = [
	'/a',
	'/b',
	'/c'
];

let lastCheckedLocation;
let lastResult;

export default function isMovingForward(location) {
	let currentLocation = location.pathname;

	if (!lastCheckedLocation) {
		lastCheckedLocation = currentLocation;
		lastResult = true;
		return true;
	}

	if (lastCheckedLocation === currentLocation) {
		return lastResult;
	}

	let lastLocationIndex = routes.findIndex(route => route === lastCheckedLocation);
	let currentLocationIndex = routes.findIndex(route => route === currentLocation);

	lastCheckedLocation = currentLocation;
	lastResult = currentLocationIndex > lastLocationIndex;

	return lastResult;
}
