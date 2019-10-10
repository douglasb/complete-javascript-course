import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {   // use curly braces here or we get an implicit return
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}

// 'Pasta with Tomato and Spinich'
/*
0

*/

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        // breaks it into single works by using the space between each word
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        // return value
        return `${newTitle.join(' ')} ...`
    }
    return title;
}

const renderRecipe = recipe => {
        const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">T${recipe.publisher}</p>
                </div>
            </a>
         </li>
        `;
        console.log(markup);
        elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
    
    recipes.forEach(renderRecipe);
}