import React from "react";
import Square from "./Square";


    export default function Board({squares,onClick}) { 
    
    return (
    
        <div>
       
        {[0, 1, 2].map(row => (
            <div key={row} className="board-row">
                {squares.slice(row * 3, row * 3 + 3).map((value, index) => (
                    <Square 
                        key={row * 3 + index} 
                        value={value} 
                        onClick={() => onClick(row * 3 + index)} 
                    />
                ))}
            </div>
        ))}
    </div>
    
    );
    }