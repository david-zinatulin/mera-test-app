import React, { useRef, useState } from 'react';
import css from "./DashboardPage.module.css";

const JsonNode = ({ value, element, index, length, className, isObject, valueType }) => {
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

    const displayShortcutObjectArray = (type) => {
        switch (type) {
            case "object": {
                return "{...}";
            }
            case "array": {
                return "[...]";
            }
        }
    }

    const checkObjectOrArrayEmpty = (value) => {
        switch (value) {
            case "[]":
            case "{}":
                return false;
            default:
                return true;
        }
    }

    return (
        <React.Fragment>
            <span className={css.key}>{"\"" + element + "\""}</span>
            <span className={css.separator}>: {checkObjectOrArrayEmpty(value) && isObject && <button className={css.toggleViewButton} onClick={toggleView}>{icon}</button>} </span>
            {!isDisplayed && <span className={css.array}>{displayShortcutObjectArray(valueType)}</span>}
            <span className={className} ref={objectRef}>
                {valueType === "boolean" ? "" + value : value}
            </span>
            {index !== length - 1 ? <span className={css.separator}>,</span> : null}
        </React.Fragment>
    );
}

export default JsonNode;