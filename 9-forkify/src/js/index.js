// Index.js Combines the business logic and the data to render results in index.html
// index.js -> index.html

// data
import Search from './models/Search';
// business logic -- controler
import * as searchView from './views/searchView';
// variables and dependencies
import {elements, renderLoader, clearLoader} from './views/base';


/** Global State of the app 
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
*/

const state = {


}

const controlSearch = async () => {   // this construtor is async because it has to handle promises
        // Get the query from the view
        const query = searchView.getInput;


        if(query) {
            // 2 new search object and add to state
            state.search = new Search(query);
            // 3) prepare UI for results
                searchView.clearInput();
                searchView.clearResults();
                renderLoader(elements.searchRes);

            // 4) Search for recipes
            await state.search.getResults();  // await is required because the results of getResults is a promise

            // 5) render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }
}


elements.searchForm.addEventListener('submit', e =>{
        e.preventDefault();
        controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
    }
})


// const search = new Search('pizza');
// console.log(search);

//search.getResults();

// putting all controllers into one file
// managing states 