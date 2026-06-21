import React from "react";

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className='bg-yellow-300 text-gray-900 font-bold rounded-lg px-2 py-0.5 shadow-md shadow-yellow-700'>
            {label}
        </button>
    );
}

export default Button;