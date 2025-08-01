import { getValidatedJsonFile } from './javascript/util.js';

// Get data from data directory
const facility = await getValidatedJsonFile("facility.json");
const item = await getValidatedJsonFile("item.json");
const recipe = await getValidatedJsonFile("recipe.json");
const recipie_data = await getValidatedJsonFile("recipie-data.json");

console.log(facility)