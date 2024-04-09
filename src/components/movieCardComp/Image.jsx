import React from 'react'

const Image = (props) => {
    return (
        <img src={props.image} className="md:h-48 w-32 h-40 drop-shadow-xl" />
    )
}

export default Image;