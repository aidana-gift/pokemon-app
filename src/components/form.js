import React, {useState} from 'react'
import request from '../redux/request'
import {useDispatch} from "react-redux";
import {pokemonActions} from "../redux/actions";

const Form = () => {
    const dispatch = useDispatch();
    const [state, setstate] = useState({
        name: '',
        desc: '',
        imgUrl: ''
    })

    const handleOnChange = (e) => {


        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const createPockemon = (e) => {
        e.preventDefault()
        const pock = {
            name: state.name,
            desc: state.desc,
            imgUrl: state.imgUrl
        }
        dispatch(pokemonActions.createPokemonAction(pock))

    }
    return (
        <div>
            <div className="w-full max-w-xs">
                <form onSubmit={(e) => createPockemon(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Pokemon name
                        </label>
                        <input
                            onChange={handleOnChange}
                            value={state.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text"
                            name={"name"}
                            placeholder="Name"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Pokemon description
                        </label>
                        <input onChange={handleOnChange}
                               value={state.desc}
                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
                               id="pokeon desc" type="text"
                               name={"desc"}
                               placeholder="Pokemon desc"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                            Pokemon image URL
                        </label>
                        <input
                            onChange={handleOnChange}
                            value={state.imgUrl}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="desc" type="text"
                            name={"imgUrl"}
                            placeholder="Pokemon desc"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                // onClick={createPockemon}
                                type="submit">
                            Add pokemon
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form