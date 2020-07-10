import React from 'react';
import { prepareJson } from "../../js/jsonUtils";
import css from "./DashboardPage.module.css";
import { generateKey } from '../../js/arrayUtils';

const DisplayArray = ({ data }) => {

    const arrayToDisplay = prepareJson(data);

    return (
        <React.Fragment>
            <span>[ </span>
            {arrayToDisplay.map((element, index) => {
                return <div key={generateKey(index)} className={css.arrayElement}>{element}</div>
            })}
            <span> ]</span>
        </React.Fragment>
    );
}

export default DisplayArray;