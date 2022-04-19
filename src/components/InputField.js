import React from "react";

const InputField = ({ input, InputHandler }) => {
    return (
        <div>
            <input className="input" placeholder="Enter the operand and operator: 2,6,5.5,4,*,-,+" value={input} onChange={InputHandler} />
        </div>
    )
}

export default InputField;