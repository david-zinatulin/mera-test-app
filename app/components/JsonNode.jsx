import React, { useRef, useState } from 'react';

const JsonNode = ({ value, element, index, length }) => {
    let objectRef = useRef();

    const NODE_CLOSED_BUTTON_ICON = "+";
    const NODE_OPENED_BUTTON_ICON = "-";

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

    const displayShortcutObjectArray = (value) => {
        if (React.isValidElement(value)) {
            return "[...]";
        } else if (typeof (value) === 'object') {
            return "{...}";
        }
    }

    return (
        <React.Fragment>
            <span style={{ color: "green" }}>{"\"" + element + "\""}</span>
            <span>: <button onClick={toggleView}>{icon}</button> </span>
            {!isDisplayed && <span>{displayShortcutObjectArray(value)}</span>}
            <span ref={objectRef}>{value}</span>
        </React.Fragment>
    );
}

export default JsonNode;