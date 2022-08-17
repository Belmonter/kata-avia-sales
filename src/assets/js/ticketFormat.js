import Ticket from '../../components/Ticket/Ticket';

export function formatTickets(data, sortChip, sortFast, sortOptimal) {
	let resultData;

	sortChip ? (resultData = sortData(...arguments)) : (resultData = data.tickets);
	sortFast ? (resultData = sortData(...arguments)) : (resultData = data.tickets);
	sortOptimal ? (resultData = sortData(...arguments)) : (resultData = data.tickets);

	if (resultData.length) {
		const tickets = resultData.map(({ price, carrier, segments }, index) => {
			const { origin: frOrigin, destination: frDestination, date: frDate, duration: frDuration, stops: frStops } = segments[0];
			const { origin: toOrigin, destination: toDestination, date: toDate, duration: toDuration, stops: toStops } = segments[1];
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
		});
		return tickets;
	}
}

function sortData(data, sortChip, sortFast, sortOptimal) {
	if (sortChip) resultData = data.tickets.sort((a, b) => a.price - b.price);
	if (sortFast) {
		return data.tickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration));
	}
	if (sortOptimal) {
		return data.tickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration));
	}
}