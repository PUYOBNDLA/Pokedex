import React from "react";

const Card = ({data}) => {

    console.log(data);

    const urlParts = data.url.split('/');
    const pokeId = urlParts[urlParts.length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
    
    return (
        <div className='p-[10px] rounded-sm flex gap-[1rem] flex-col items-center justify-between cursor-pointer hover:shadow-lg'>
            <img src={imgUrl} alt="pokemon" className='w-[100px] h-[100px] object-cover'/>
            <div className='w-full text-center '>
                <h4 className='capitalize font-bold'>
                    <span className='font-normal text-[0.8rem] mr-[5px]'>
                        {pokeId}
                    </span>
                    {data.name}
                </h4>
            </div>
        </div>
    );
}

export default Card;