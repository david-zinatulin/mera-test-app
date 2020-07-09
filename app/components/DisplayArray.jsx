import React from 'react';
import { element } from 'prop-types';

const DisplayArray = ({ data }) => {
    const prepareArray = (data) => {
        const array = [...data];
        return array;
    }

    const arrayToDisplay = prepareArray(data);

    return (
        <React.Fragment>
            <span>[ </span>
            {arrayToDisplay.map((element, index) => {
                if (index !== arrayToDisplay.length - 1) {
                    return <div style={{ marginLeft: 30 + "px" }}>{element + ", "}</div>
                } else {
                    return <div style={{ marginLeft: 30 + "px" }}>{element}</div>
                }
            })}
            <span> ]</span>
        </React.Fragment>
    );
}

export default DisplayArray;