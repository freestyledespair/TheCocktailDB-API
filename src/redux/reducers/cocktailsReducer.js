import { cocktailsAPI } from "../../api"


const initialState = {
    isLoading: false,
    cocktailsArr: [],
    cocktail: {},
    ingredient: {},
}

const TOGGLE_LOADING = "TOGGLE_LOADING"
const SET_COCKTAILS = "SET_COCKTAILS"
const SET_DETAIL = "SET_DETAIL"
const SET_INGREDIENT = "SET_INGREDIENT"

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_COCKTAILS:
            return {
                ...state,
                cocktailsArr: action.cocktailsArr
            }
        case SET_DETAIL:
            return {
                ...state,
                cocktail: action.cocktail
            }
        case SET_INGREDIENT:
            return {
                ...state,
                ingredient: action.ingredient
            }
        default:
            return state
    }
}

const toggleIsLoading = (isLoading) => ({ type: TOGGLE_LOADING, isLoading })
const setCocktailsArr = (cocktailsArr) => ({ type: SET_COCKTAILS, cocktailsArr })
const setCocktailDetail = (cocktail) => ({ type: SET_DETAIL, cocktail })
const setCocktailIngredient = (ingredient) => ({ type: SET_INGREDIENT, ingredient })

export const getCocktailsByName = (name) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    cocktailsAPI.getByName(name)
        .then(data => dispatch(setCocktailsArr(data?.drinks)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getAllCocktails = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    cocktailsAPI.getAllCocktails()
        .then(data => dispatch(setCocktailsArr(data?.drinks)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getFiltered = (value) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    cocktailsAPI.getFilter(value)
        .then(data => dispatch(setCocktailsArr(data?.drinks)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getDetailed = (id) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    cocktailsAPI.getDetail(id)
        .then(data => dispatch(setCocktailDetail(data?.drinks[0])))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getIngredient = (name) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    cocktailsAPI.getIngredient(name)
        .then(data => dispatch(setCocktailIngredient(data?.ingredients[0])))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export default cocktailsReducer;