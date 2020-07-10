import React, { useState } from 'react';
import css from './DashboardPage.module.css';

const KeyValuePair = ({ value, element, index, length, className, isObject, valueType }) => {
    const NODE_CLOSED_BUTTON_ICON = '+';
    const NODE_OPENED_BUTTON_ICON = '-';

    const [isDisplayed, setIsDisplayed] = useState(true);

    const toggleView = () => {
        setIsDisplayed(!isDisplayed);
    };

    const displayShortcutObjectArray = type => {
        switch (type) {
            case 'object': {
                return '{...}';
            }
            case 'array': {
                return '[...]';
            }
        }
    };

    const checkObjectOrArrayEmpty = value => {
        switch (value) {
            case '[]':
            case '{}':
                return false;
            default:
                return true;
        }
    };

    return (
        <React.Fragment>
            <span className={css.key}>{`"${element}"`}</span>
            <span className={css.separator}>
                :<span> </span>
                {checkObjectOrArrayEmpty(value) && isObject && (
                    <button className={css.toggleViewButton} onClick={toggleView}>
                        {isDisplayed ? NODE_OPENED_BUTTON_ICON : NODE_CLOSED_BUTTON_ICON}
                    </button>
                )}
            </span>
            <span> </span>
            {!isDisplayed && (
                <span className={valueType === 'array' ? css.array : css.object}>
                    {displayShortcutObjectArray(valueType)}
                </span>
            )}
            {isDisplayed && <span className={className}>{valueType === 'boolean' ? `${value}` : value}</span>}
            {index !== length - 1 ? <span className={css.separator}>,</span> : null}
        </React.Fragment>
    );
};

export default KeyValuePair;
