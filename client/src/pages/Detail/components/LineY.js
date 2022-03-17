import React from "react";

export default function LineY() {
    return (
        <div>
            <div className="absolute bg-black h-4 w-1 -top-1.5 left-0 z-10"></div>
            <div className="absolute bg-black h-4 w-1 -top-1.5 left-1/4 z-10"></div>
            <div className="absolute bg-black h-4 w-1 -top-1.5 inset-x-2/4 z-10"></div>
            <div className="absolute bg-black h-4 w-1 -top-1.5 right-1/4 z-20"></div>
            <div className="absolute bg-black h-4 w-1 -top-1.5 right-0 z-10"></div>
        </div>
    );
}
