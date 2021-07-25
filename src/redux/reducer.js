import {pokemonConstants} from "./constants";

export const initialState = {
    loading: false,
    success: false,
    error: false,
    data: {}
}

export const initialPostState = {
    loading: false,
    success: false,
    error: false,
    data: {}
}

export const initialFavState = {
    loading: false,
    success: false,
    error: false,
    favs: []
}
export function getReducer(state = initialState, action) {
    switch (action.type) {
        case pokemonConstants.POKEMON_GET:
            return { ...state, loading: true };
        case pokemonConstants.POKEMON_GET_SUCCESS:
            return { ...state, loading: false, success: true, data: action.data};
        case pokemonConstants.POKEMON_GET_FAILURE:
            return {...state, loading: false, error: true};
        default:
            return state
    }
}

export function createReducer(state = initialPostState, action) {
    switch (action.type) {
        case pokemonConstants.POKEMON_POST:
            return { ...state, loading: true };
        case pokemonConstants.POKEMON_POST_SUCCESS:
            return { ...state, loading: false, success: true};
        case pokemonConstants.POKEMON_POST_FAILURE:
            return {...state, loading: false, error: true};
        default:
            return state
    }
}

export function favReducer(state = initialFavState, action) {
    console.log(action)
    state.favs?.push(action.id)
    switch (action.type) {

        case pokemonConstants.FAVOURITE_ADD:
            return { ...state, favs: state.favs};
        default:
            return state
    }
}

