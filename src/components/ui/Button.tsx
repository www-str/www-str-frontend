import React from 'react'

interface IButton {
    onclick?: () => void;
    className?: string;
    children: React.ReactNode;
    choosed?: boolean
}

const Button = ({ onclick, className, children, choosed }: IButton) => {
    return (
        <button
            onClick={onclick}
            className={`bg-[#ef1d27] active:bg-[#f26168] ${choosed ? "bg-[#f26168]" : ""} text-white font-medium px-8 py-4 rounded-xl transition-all cursor-pointer hover:opacity-80 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button