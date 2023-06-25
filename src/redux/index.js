import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import cocktailsReducer from "./reducers/cocktailsReducer";


const rootReducer = combineReducers({
    cocktails: cocktailsReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))