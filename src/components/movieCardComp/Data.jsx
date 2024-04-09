import React from 'react'

const Data = (props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-black font-serif">{props.name}</h2>
      <h3><span className="font-semibold">Genre: </span><span className=" text-black">{props.genre}</span></h3>
      <h3><span className="font-semibold">Director: </span><span className=" text-black">{props.director}</span></h3>
      <h3><span className="font-semibold">Starring: </span><span className=" text-black">{props.starring}</span></h3>
      <div className="text-black">
        <span>{props.runtime ? props.runtime : "Mins"} | </span>
        <span>{props.language} | </span>
        <span>{new Date(props.date).toUTCString()}</span>
      </div>
      <div className="text-blue-600">
        <span>{props.views} views | </span>
        <span>Voted by {props.votes} People</span>
      </div>
    </div>
  )
}

export default Data;