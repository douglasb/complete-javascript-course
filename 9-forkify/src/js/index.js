import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';




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
        const query = searchView.getInput; //TODO 
        console.log(query);

        if(query) {
            // 2 new search object and add to state
            state.search = new Search(query);
            // 3) prepare UI for results

            // 4) Search for recipes
            await state.search.getResults();  // await is required because the results of getResults is a promise

            // 5) render results on UI
            console.log(state.search.result);
        }
}


elements.searchForm.addEventListener('submit', e =>{
        e.preventDefault();
        controlSearch();
});


// const search = new Search('pizza');
// console.log(search);

//search.getResults();

// putting all controllers into one file
// managing states 