import request from "./request";

export const pokemonService = {
    getPokemons,
    createPokemons,
    deletePokemon
}

function getPokemons(){
    return(
        request.get('/pockemon.json')
            .catch(err=>{
                console.log(err);
                return err
            })
    )
}

function createPokemons(data){
    return(
        request.post('/pockemon.json', data).then(res => {
            console.log(res)
        })
    )
}

function deletePokemon(id){
    return(
        request.delete(`/pockemon/${id}.json`).then(res => {
            console.log(res)
        })
    )
}