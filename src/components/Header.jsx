import React, { useState } from "react";
import logo from '../images/pokemonlogo.png';
import Button from './Button.jsx';
import { Link } from "react-router-dom";

const Header = () => {

    const [query, setQuery] = useState('');

    return (
        <div className='bg-gray-200 p-[1rem] fixed w-full fixed top-0 left-0'>
            <header className='rounded-full px-4 py-2'>
                <nav className='flex items-center justify-between gap-[1rem] '>
                    <img src={logo} alt='logo' className='w-[100px]'/>
                    <div className='rounded-xl px-4 py-2.5 bg-yellow-500 flex gap-3'>
                        <input type='text' placeholder='Search by name or ID' value={query} onChange={(e) => setQuery(e.target.value)} className='bg-yellow-300 outline-none rounded-lg placeholder:text-gray-800 pl-1 shadow-inner shadow-yellow-700' />
                        <Link to={`/${query}`}>
                            <Button label={'Search'} />
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;