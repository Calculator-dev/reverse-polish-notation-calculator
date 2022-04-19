import React, { useState } from "react";
import InputField from "./InputField";
import Buttons from "./Buttons";

const Calculator = () => {

    const [msg, setMsg] = useState("");
    const [input, setInput] = useState("");
    const [locked, setLocked] = useState(0);
    console.log(input)

    const empty = <p className="messages">You did not enter anything!</p>
    const operators = <p className="messages">"Something went wrong! Check the number of OPERATORS"</p>
    const operands = <p className="messages">"Something went wrong! Check the number of OPERANDS"</p>
    const validInput = <p className="messages">"Only numbers and arithemtic operators are valid!"</p>

    const InputHandler = (e) => {
        if (e.target.value.match(/[^0-9-+/*,.]+$/)) {
            setMsg(validInput)
        }
        else {
            setInput(e.target.value);
            setMsg("");
        }
    }

    function Clear() {
        setInput("");
        setMsg("");
        setLocked(0);
    }

    function Counting(newExpr) {
        let expr = newExpr.split(",");
        let stack = [];
        let numberCounter = 0;
        let operatorCounter = 0;

        for (let i = 0; i < expr.length; i++) {
            if (!isNaN(expr[i]) && isFinite(expr[i])) {
                stack.push(expr[i]);
                numberCounter++;
            } else {
                operatorCounter++;
                let a = stack.pop();
                let b = stack.pop();
                if (expr[i] === "+") {
                    stack.push(parseFloat(a) + parseFloat(b));
                } else if (expr[i] === "-") {
                    stack.push(parseFloat(a) - parseFloat(b));
                } else if (expr[i] === "*") {
                    stack.push(parseFloat(a) * parseFloat(b));
                } else if (expr[i] === "/") {
                    stack.push(parseFloat(a) / parseFloat(b));
                }
            }
        }

        if (input === "") {
            return setMsg(empty);
        }

        if (numberCounter === operatorCounter + 1) {
            setInput(input + " = " + stack[0]);
            setLocked(1);
        }
        else if (numberCounter <= operatorCounter) {
            setMsg(operands);
            setLocked(0);
        }
        else {
            setMsg(operators);
            setLocked(0);
        }
    }

    return (
        <div className="container">
            <InputField input={input} InputHandler={InputHandler} />
            <Buttons locked={locked} input={input} Clear={Clear} Counting={Counting} />
            {msg}
        </div>
    )
}

export default Calculator;