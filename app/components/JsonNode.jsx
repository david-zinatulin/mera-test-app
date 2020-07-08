import React, { useRef, useState } from 'react';
import { element } from 'prop-types';

const JsonNode = ({ value, element, index, length }) => {

    const objectRef = useRef();
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [symbol, changeSymbol] = useState("-");
    const toggleView = () => {
        if (isDisplayed) {
            objectRef.current.style.display = "none";
            changeSymbol("+");
        } else {
            objectRef.current.style.display = "";
            changeSymbol("-");
        }
        setIsDisplayed(!isDisplayed);
    }

    return (
        <React.Fragment>
            <span style={{ color: "green" }}>{"\"" + element + "\""}</span>
            <span>: <button onClick={toggleView}>{symbol}</button></span>
            <span ref={objectRef}>{value}</span>
        </React.Fragment>
    );
}

export default JsonNode;