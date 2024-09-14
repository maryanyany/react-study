import { useEffect, useState } from "react"

export default function Pockemon(){
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        //.then((data) => console.log(data), "data")
        .then((res) => res.json())
        .then((data) => {
            setPokemons(data.results)
            setLoading(false)
        })
       //.catch((error) => console.log(error), "error")
        .catch((error) => {
            seterror(error.message)
            setLoading(false)
        })
    },[])


    if (loading) {
        return <p>carregando...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return(
        <div>
            <h1>Lista de Pockemons</h1>
            <ul>
                {
                   pokemons.map((pokemon, index) => 
                    <li key={index} >{pokemon.name}</li>
                    )
                }
            </ul>
        </div>
    )
}