import React from 'react'
import {useDispatch} from "react-redux";
import {pokemonActions} from "../redux/actions";

const PokemonCard = (props) => {
    const {data, id} = props;
    const dispatch = useDispatch()

    const deletePokemon = () => {
        dispatch(pokemonActions.deletePokemonAction(data.id))
    }

    const addToFavs = () => {
        dispatch(pokemonActions.addFavAction(data.id))
    }
    console.log(data)
    return (
        <div className="bg-white rounded shadow border p-6 w-64">
            <img src={data.imgUrl} alt={"Pokemon"} height={"200px"}/>
            <h5 className="text-3xl font-bold mb-4 mt-0">{data.name}</h5>
            <p className="text-gray-700 text-sm">{data.desc}</p>
            <button onClick={() => addToFavs()}><img src="https://image.flaticon.com/icons/png/512/263/263417.png" width="30px"/></button>
            <button onClick={() => deletePokemon()}><img src="https://image.flaticon.com/icons/png/512/3221/3221897.png" width="30px"/></button>
        </div>
    )
}

export default PokemonCard