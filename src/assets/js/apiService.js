class AviaService {
	_url = 'https://aviasales-test-api.kata.academy/';
	_searchId = '';

	async getData(options = null) {
		const result = await fetch(`${this._url}${options}`);
		return await result.json();
	}

	async getTickets() {
		const searchId = await this.getSearchId();
		return this.getData(`tickets?searchId=${searchId}`);
	}

	async getSearchId() {
		const { searchId } = await this.getData('search');
		return searchId;
	}
}

export default AviaService;
