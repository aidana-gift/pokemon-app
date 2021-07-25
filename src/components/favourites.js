import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {pokemonActions} from "../redux/actions";
import PokemonCard from "./PokemonCard";

const Favourites = () => {
    const dispatch = useDispatch()
    const favs = useSelector(state => state.favReducer.favs)
    const cards = useSelector(state => state.getReducer.data.data)
    console.log(favs)

    useEffect(() => {
        dispatch(pokemonActions.getPokemonsAction())
    }, [])

    useEffect(() => {
        items()
    }, [cards])

    const items = () => {
        for (const [key, value] of Object.entries(cards ? cards : {})){
            value['id'] = key;
        }
    }

    const checkFavs = (id) => {
        for(let i=0; i<favs.length; i++){
            if(favs[i] === id)
                return true
        }
        return false
    }

    const favArray = Object.values(cards ? cards : {}).filter(i => () => checkFavs(i.id))
    const favRes = favArray.map((i, id) => <PokemonCard key={id} data={i} />)

    console.log(favArray)

    return(
        <div>
            {
                favRes
            }
        </div>
    )
}

export default Favourites