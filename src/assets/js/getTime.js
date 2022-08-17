export function getTime(min, between) {
	let hours = Math.trunc(min / 60);
	let minutes = min % 60;
	if (minutes < 10) minutes = `0${minutes}`;
	if (between) {
		return {
			hours,
			minutes,
		};
	}
	return `${hours}ч ${minutes}м`;
}

export function getTimeBetween(apiDate, min) {
	const timeStart = new Date(apiDate);
	const timeEnd = min * 60000;
	let startHours = timeStart.getHours();
	let startMinutes = timeStart.getMinutes();
	const { hours: hoursDiff, minutes: minutesDiff } = getTime(min, true);
	let endHours = (startHours + hoursDiff) % 24;
	let endMinutes = (startMinutes + minutesDiff) % 60;

	if ((startMinutes + minutesDiff) % 60 > 0) endHours++;

	if (startHours < 10) startHours = `0${startHours}`;
	if (endHours < 10) endHours = `0${endHours}`;
	if (startMinutes < 10) startMinutes = `0${startMinutes}`;
	if (endMinutes < 10) endMinutes = `0${endMinutes}`;

	return `${startHours}:${startMinutes} – ${endHours}:${endMinutes}`;
}
