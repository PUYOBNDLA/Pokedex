import React from 'react';
import Header from '../components/Header.jsx';
import Feed from '../components/Feed.jsx';
import LoadingScreen from '../components/LoadingScreen.jsx'
import { useState, useEffect } from 'react';

const Home = () => {
    
    const[pokemons, setPokemons] = useState([]);
    const[offSet, setOffSet] = useState(() => {
        const storedOffset = sessionStorage.getItem('offset');
        return storedOffset ? parseInt(storedOffset, 10) : 0;
    });
    const [loading, setLoading] = useState(true)

    function handleNextPage() {
        const newOffset = offSet + 50;
        setOffSet(newOffset);
        sessionStorage.setItem('offset', newOffset.toString());
    }

    function handlePreviousPage() {
        const newOffset = offSet <= 50 ? 0 : offSet - 50 ;
        setOffSet(newOffset);
        sessionStorage.setItem('offset', newOffset.toString());
    }

    useEffect(() => {
        async function fetchPokemon () {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offSet}`;
            const res = await fetch(apiUrl);
            const data = await res.json();

            setPokemons(data.results);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        fetchPokemon()
    }, [offSet]);

    useEffect(() => {
        setLoading(true);
    }, [offSet]);

    return (
        <div className='Home'>
            {loading && (<LoadingScreen />)};
            {!loading && (
                <>
                    <Header />
                    <Feed pokemons={pokemons}/>
                    <div className='flex items-center justify-center gap-[1rem] my-[2rem, 1rem]'>
                        <button onClick={handlePreviousPage} className='bg-yellow-300 text-gray-900 font-bold rounded-lg px-2 py-0.5 shadow-md shadow-yellow-700 min-w-[100px]'>
                            Previous
                        </button>
                        <button onClick={handleNextPage} className='bg-yellow-300 text-gray-900 font-bold rounded-lg px-2 py-0.5 shadow-md shadow-yellow-700 min-w-[100px]'>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
