import React from "react";
import Card from './Card.jsx'
import {Link} from "react-router-dom";

const Feed = ({pokemons}) => {
    return (
        <section className='grid mt-[6rem] grid-cols-4 gap-[1rem]'>
            {pokemons.map((pokemon) => (
                <Link to={`/${pokemon.name}`} key={pokemon.name}>
                    <Card data={pokemon}/>
                </Link>
            ))}
        </section>
    )
}

export default Feed;