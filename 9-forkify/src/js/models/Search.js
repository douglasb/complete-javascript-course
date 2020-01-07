import axios from 'axios'; 
// FIXME(douglas): passing the value from the search input box - function isn't translating the value
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        const key = '986b523ea59363c4493ecf43555b9efa';
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        }
        catch(error) {
            alert(error);
        }

    }
}