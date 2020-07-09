import React, { useRef, useState } from 'react';
import css from "./DashboardPage.module.css";
import { isObject } from 'lodash';

const JsonNode = ({ value, element, index, length, className, isObject }) => {
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
            <span className={css.key}>{"\"" + element + "\""}</span>
            <span>: {isObject && <button onClick={toggleView}>{icon}</button>}</span>
            {!isDisplayed && <span>{displayShortcutObjectArray(value)}</span>}
            <span className={className} ref={objectRef}>{value}</span>
        </React.Fragment>
    );
}

export default JsonNode;