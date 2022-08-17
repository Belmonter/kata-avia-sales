export function formatPrice(price) {
	const result = new Intl.NumberFormat('ru').format(price);
	return result;
}
