import {pokemonConstants} from "./constants";
import {pokemonService} from "./services";

export const pokemonActions = {
    getPokemonsAction,
    createPokemonAction,
    deletePokemonAction,
    addFavAction
};

function getPokemonsAction(){
    return dispatch => {
        dispatch(request());
        pokemonService.getPokemons()
            .then( data =>
                {
                    dispatch(success(data))
                }
            )
            .catch(err => {
                    dispatch(failure(err))
                }
            )
    }
    function request(){ return {type: pokemonConstants.POKEMON_GET}}
    function success(data) { return { type: pokemonConstants.POKEMON_GET_SUCCESS, data } }
    function failure(error) { return { type: pokemonConstants.POKEMON_GET_FAILURE, error } }
}


function createPokemonAction(data){
    return dispatch => {
        dispatch(request());
        pokemonService.createPokemons(data)
            .then( res =>
                {
                    dispatch(success(res))
                }
            )
            .catch(err => {
                    dispatch(failure(err))
                }
            )
    }
    function request(){ return {type: pokemonConstants.POKEMON_POST}}
    function success(data) { return { type: pokemonConstants.POKEMON_POST_SUCCESS, data } }
    function failure(error) { return { type: pokemonConstants.POKEMON_POST_FAILURE, error } }
}

function deletePokemonAction(id){
    console.log(id)
    return dispatch => {
        dispatch(request());
        pokemonService.deletePokemon(id)
            .then( res =>
                {
                    dispatch(success(res))
                }
            )
            .catch(err => {
                    dispatch(failure(err))
                }
            )
    }
    function request(){ return {type: pokemonConstants.POKEMON_DELETE}}
    function success(data) { return { type: pokemonConstants.POKEMON_DELETE_SUCCESS, data } }
    function failure(error) { return { type: pokemonConstants.POKEMON_DELETE_FAILURE, error } }
}

function addFavAction(id){
    console.log(id)
    return dispatch => {
        dispatch(request(id)); }
    function request(id){ return {type: pokemonConstants.FAVOURITE_ADD, id}}

}