import React, { useRef, useState } from 'react';

const JsonNode = ({ value, element, index, length }) => {
    const NODE_CLOSED_BUTTON_ICON = "+";
    const NODE_OPENED_BUTTON_ICON = "-";

    const objectRef = useRef();

    const [isDisplayed, setIsDisplayed] = useState(true);
    const [icon, changeIcon] = useState(NODE_OPENED_BUTTON_ICON);

    const toggleView = () => {
        if (isDisplayed) {
            objectRef.current.style.display = "none";
            changeIcon(NODE_CLOSED_BUTTON_ICON);
        } else {
            objectRef.current.style.display = "";
            changeIcon(NODE_OPENED_BUTTON_ICON);
        }
        setIsDisplayed(!isDisplayed);
    }

    return (
        <React.Fragment>
            <span style={{ color: "green" }}>{"\"" + element + "\""}</span>
            <span>: <button onClick={toggleView}>{icon}</button></span>
            <span ref={objectRef}>{value}</span>
        </React.Fragment>
    );
}

export default JsonNode;