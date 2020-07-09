import React from 'react';
import { random } from 'lodash';
import { prepareJson } from "../js/jsonUtils";
import css from "./DashboardPage.module.css";

const DisplayObject = ({ data }) => {

    const generateKey = (index) => {
        return index * 2 + random(1000000);
    }

    const jsonArray = prepareJson(data);

    return jsonArray.map((elem, index) => {
        const base = <div key={key} className={css.line}>{elem}</div>;
        let key = generateKey(index);
        let array = [];
        if (jsonArray.length > 1) {
            let bracketKey = generateKey(index);
            if (index === 0) {
                array.push(<div className={css.separator} key={bracketKey}>{"{"}</div>);
                array.push(base);
                return array;
            }
            if (index === (jsonArray.length - 1)) {
                array.push(base);
                array.push(<div className={css.separator} key={bracketKey}>{"}"}</div>)
                return array;
            }
        } else {
            array.push(<div className={css.separator} key={generateKey(index)}>{"{"}</div>);
            array.push(base);
            array.push(<div className={css.separator} key={generateKey(index)}>{"}"}</div>)
            return array;
        }
        return base;
    })
}

export default DisplayObject;