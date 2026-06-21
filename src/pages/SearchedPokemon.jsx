import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import Button from "../components/Button";
import Stats from "../components/Stats";

const colours = {
    normal: "bg-[#A8A77A]",
    fire: "bg-[#EE8130]",
    water: "bg-[#6390F0]",
    electric: "bg-[#F7D02C]",
    grass: "bg-[#7AC74C]",
    ice: "bg-[#96D9D6]",
    fighting: "bg-[#C22E28]",
    poison: "bg-[#A33EA1]",
    ground: "bg-[#E2BF65]",
    flying: "bg-[#A98FF3]",
    psychic: "bg-[#F95587]",
    bug: "bg-[#A6B91A]",
    rock: "bg-[#B6A136]",
    ghost: "bg-[#735797]",
    dragon: "bg-[#6F35FC]",
    dark: "bg-[#705746]",
    steel: "bg-[#B7B7CE]",
    fairy: "bg-[#D685AD]",
}

const SearchedPokemon = () => {
    const { pokemon } = useParams();
    const [selectedPokemon, setSelectedPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [stats, setStats] = useState({
        height: 0,
        weight: 0,
        exp: 0,
        hp: 0,
        attack: 0,
        defense: 0,
        splAttack: 0,
        splDefense: 0,
        speed: 0,
    });


    useEffect(() => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        async function fetchPokemon(){
            setLoading(true);
            try{
                const response = await fetch(apiUrl);
                if(!response.ok) throw new error ('Error Ocurred!!!');

                const data = await response.json();

                setSelectedPokemon(data);

                setStats({
                    height: (data.height / 3.048).toFixed(1),
                    weight: (data.weight / 10).toFixed(1),
                    exp: data.base_experience,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    splAttack: data.stats[3].base_stat,
                    splDefense: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                })

                setTimeout(() => {
                    setLoading(false);
                },);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }
        fetchPokemon();
    }, [pokemon]);

    if(loading)
        return <LoadingScreen/>;

    if(error)
        return <ErrorScreen/>;

    return (
        <div className='h-[100vh] p-[1rem] overflow-y-auto flex flex-col'>
            <div className='mb-[1rem]'>
                <Link to={'/'}>
                    <Button label='Back'/>
                </Link>
            </div>

            <div className='flex flex-1 gap-[2rem]'>
                <div className='flex-1'>
                    <h4 className='text-[clamp(2rem,6vw,4rem)] capitalize font-bold'>
                        {selectedPokemon.name}
                    </h4>
                    <div className='flex gap-[0.5rem] my-[1rem]'>
                        {selectedPokemon.types.map((type, index) => (
                            <span key={index} className={`${colours[type.type.name]} p-[0.5rem] font-bold capitalize text-white`}>{type.type.name}</span>
                        ))}
                    </div>
                    <div className='grid grid-cols-2 gap-[2rem] items-center w-full'>
                        <div>
                            <Stats stats={stats}/>
                        </div>
                        <div className='w-[400px] h-[400px] justify-self-center'>
                            <img src={selectedPokemon.sprites.other.home.front_default} alt={selectedPokemon.name}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchedPokemon;