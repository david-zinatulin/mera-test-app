import React from 'react';
import { prepareJson } from "../js/jsonUtils";

const DisplayArray = ({ data }) => {

    const arrayToDisplay = prepareJson(data);

    return (
        <React.Fragment>
            <span>[ </span>
            {arrayToDisplay.map((element, index) => {
                if (index !== arrayToDisplay.length - 1) {
                    return <div style={{ marginLeft: 30 + "px" }}>{element}</div>
                } else {
                    return <div style={{ marginLeft: 30 + "px" }}>{element}</div>
                }
            })}
            <span> ]</span>
        </React.Fragment>
    );
}

export default DisplayArray;