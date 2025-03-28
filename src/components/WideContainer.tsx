import React from 'react'

interface IWideContainer {
    children?: React.ReactElement
    classname?: string;
    style?: object
}

const WideContainer: React.FC<IWideContainer> = ({ children, classname, style }) => {
    return (
        <div
            className={`px-5 lg:px-20 bg-white h-full ${classname}`}
            style={style}
        >
            {children}
        </div>
    )
}

export default WideContainer