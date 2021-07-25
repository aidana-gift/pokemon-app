import React, {useEffect} from 'react'
import Form from "./form";
import PokemonCard from "./PokemonCard";
import {useDispatch, useSelector} from "react-redux";
import {pokemonActions} from "../redux/actions";
import {Link} from "react-router-dom";


const Main = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.getReducer.data?.data ? state.getReducer.data.data : {})

    useEffect(() => {
        dispatch(pokemonActions.getPokemonsAction())
        console.log(state)

    }, [])

    useEffect(() => {
        items()
    }, [state])


    const items = () => {
        for (const [key, value] of Object.entries(state ? state : {})){
            value['id'] = key;
        }
    }

    const pokemonCards = Object.values(state).map((i, id) => <PokemonCard key={id} data={i}/>)



    return(
        <div>
            <Link to={'/favourites'}>Favourites(0)</Link>

            <div className="container">
                {pokemonCards}
            </div>

            <Form />

        </div>


)
}

export default Main