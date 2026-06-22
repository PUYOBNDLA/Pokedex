import React from "react";

const Stat = ({parameter,value,units}) => {
    return (
        <div className='flex flex-col items-center justify-between border-solid border p-[5px]'>
            <div className='text-[0.9rem] font-bold p-[5px]'>
                {parameter}
            </div>            
            <div className='border-solid border-black p-[5px] rounded-lg'>
                {value}
                <span>
                    {units}
                </span>
            </div>  
        </div>
    )
}

export default Stat;