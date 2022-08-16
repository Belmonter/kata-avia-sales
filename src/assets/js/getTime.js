function getTime(min) {
	let hours = Math.trunc(mins / 60);
	let minutes = min % 60;
	return `${hours}ч ${min}м`;
}

function getTimeBetween(value, minutes) {
	const date = new Date(value);
	const hoursFrom = date.getHours();
	const minutesFrom = date.getMinutes();
	const hourDestination = hoursFrom + getTime(minutes);
}

export default getTime;
