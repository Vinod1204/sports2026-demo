import { get, post } from '../data/crud';
 
class BetsService {
    constructor() {
        this.baseUrl = '/api/bets';
        this.getActiveRoundUrl = `${this.baseUrl}/get-active-round`;
        this.submitBetsUrl = `${this.baseUrl}/submit`;
        this.totalBetsUrl = `${this.baseUrl}/total`;
    }

    getActiveRound() {
        return get(this.getActiveRoundUrl, {}, {})
    }

    submitBets(body) {
        return post(this.submitBetsUrl, body, {})
    }

    getTotalBets() {
        return get(this.totalBetsUrl, {}, {})
    }
}

export default BetsService;
