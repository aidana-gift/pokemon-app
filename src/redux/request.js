import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://pockemons11-default-rtdb.firebaseio.com/'
    }
)