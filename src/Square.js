// Square.js
import React from 'react';
function handleClick() {
    console.log('clicked!');
    }
export default function Square({value}) {
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}
