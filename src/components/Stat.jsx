import React from "react";

const Stat = ({parameter,value,units}) => {
    return (
        <div className='flex flex-col items-center justify-between'>
            <div className='text-[0.9rem]'>
                {parameter}
            </div>            
            <div className='border-solid border-black p-[1rem] rounded-lg'>
                {value}
                <span>
                    {units}
                </span>
            </div>  
        </div>
    )
}

export default Stat;