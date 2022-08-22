class AviaService {
	_url = 'https://aviasales-test-api.kata.academy/';

	async getData(search, options = null) {
		try {
			const result = await fetch(`${this._url}${options}`);
			return await result.json();
		} catch (e) {
			await this.getData(false, options);
		}
	}

	async getTickets(searchId = true) {
		if (searchId) this.searchId = await this.getSearchId();
		return this.getData(false, `tickets?searchId=${this.searchId}`);
	}

	async getSearchId() {
		const { searchId } = await this.getData(true, 'search');
		return searchId;
	}
}

export default AviaService;
