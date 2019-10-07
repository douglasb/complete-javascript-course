
import axios from 'axios';  // importing npm packages dirctly into the app

async function getResults(query) {
    const key = '986b523ea59363c4493ecf43555b9efa';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    }
    catch(error) {
        alert(error);
    }
}

getResults('pizza');



// 986b523ea59363c4493ecf43555b9efa
// https://www.food2fork.com/api/search
