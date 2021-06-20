import React from "react";

function Buttons({ Clear, input, locked, Counting }) {
    return (
        <div className="buttons">
            <button className="compute" disabled={locked} onClick={() => Counting(input)}>Compute</button>
            <button className="clear" onClick={Clear}>Clear</button>
        </div>
    )
}

export default Buttons;