import Ticket from '../../components/Ticket/Ticket';

export function formatTickets(data, counter = 5, sortChip, sortFast) {
	let resultData;

	if (sortChip) resultData = sortData(data, true);
	if (sortFast) resultData = sortData(data, false, true);

	if (resultData.length) {
		const tickets = resultData.map(({ price, carrier, segments }, index) => {
			const { origin: frOrigin, destination: frDestination, date: frDate, duration: frDuration, stops: frStops } = segments[0];
			const { origin: toOrigin, destination: toDestination, date: toDate, duration: toDuration, stops: toStops } = segments[1];
			if (index + 1 < counter) {
				return (
					<Ticket
						key={index + carrier}
						price={price}
						carrier={carrier}
						frOrigin={frOrigin}
						frDestination={frDestination}
						frDate={frDate}
						frDuration={frDuration}
						frStops={frStops}
						toOrigin={toOrigin}
						toDestination={toDestination}
						toDate={toDate}
						toDuration={toDuration}
						toStops={toStops}
					/>
				);
			}
		});
		return tickets;
	} else {
		return 'Рейсов, подходящих под заданные фильтры, не найдено';
	}
}

function sortData(data, sortChip, sortFast) {
	if (sortChip) return [...data].sort((a, b) => a.price - b.price);
	if (sortFast) {
		return [...data].sort((a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration));
	}
}