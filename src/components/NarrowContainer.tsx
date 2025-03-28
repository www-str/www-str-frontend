import React from 'react'

interface INarrowContainer {
    children?: React.ReactElement
    classname?: string;
    style?: object
}

const NarrowContainer: React.FC<INarrowContainer> = ({ children, classname, style }) => {
    return (
        <div className={`bg-white rounded-2xl mx-5 lg:mx-20 ${classname}`} style={style}>
            {children}
        </div>
    )
}

export default NarrowContainer