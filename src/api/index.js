import axios from "axios";


const instance = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    headers: {
        "Content-Type": "application/json",
    },
})

export const cocktailsAPI = {
    getAllCocktails() {
        return instance.get("filter.php?c=Cocktail").then(res => res.data)
    },
    getByName(name = "") {
        return instance.get(`search.php?s=${name}`).then(res => res.data)
    },
    getFilter(value) {
        return instance.get(`filter.php?a=${value}`).then(res => res.data)
    },
    getDetail(id) {
        return instance.get(`lookup.php?i=${id}`).then(res => res.data)
    },
    getIngredient(name) {
        return instance.get(`search.php?i=${name}`).then(res => res.data)
    }
}