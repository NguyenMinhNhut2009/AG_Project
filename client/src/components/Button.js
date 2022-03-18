import React from "react";
export default function Button({ active, className, name, Icon }) {
    return (
        <button
            className={`${className} py-2 px-5 font-medium 
                text-white outline-none border-none 
                tracking-widest rounded-2xl 
                bg-primary-500 shadow-popup transition-all hover:bg-quaternary-500 
                hover:text-black z-30 ${
                    Icon ? "flex-center-y justify-between" : "text-center"
                }`}
        >
            <p>{name}</p>
            {Icon && <Icon size={24} />}
        </button>
    );
}