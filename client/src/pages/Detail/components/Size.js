import React from "react";

export default function Choose({ title }) {
    return (
        <div>
            {
                <div className="text-xl font-bold bg-input-1 w-16 py-2 rounded-2xl">
                    {title}
                </div>
            }
        </div>
    );
}
