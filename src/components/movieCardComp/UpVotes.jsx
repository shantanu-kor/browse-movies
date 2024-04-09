import React from 'react';
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

const UpVotes = (props) => {
  return (
    <div className="flex flex-col justify-between">
        <button><VscTriangleUp className="md:text-6xl text-4xl text-gray-700 mx-auto" /></button>
        <h3 className="text-center font-bold text-2xl text-gray-700">{props.votes}</h3>
        <button><VscTriangleDown className="md:text-6xl text-4xl text-gray-700 mx-auto" /></button>
        <br />
        <h3 className="text-center md:font-medium text-2xl">Votes</h3>
    </div>
  )
}

export default UpVotes;