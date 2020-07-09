import React from 'react';
import JsonNode from "./JsonNode";
import { random } from 'lodash';
import DisplayArray from './DisplayArray';
import css from "./DashboardPage.module.css";

const DisplayObject = ({ data }) => {

    const prepareJson = (data) => {
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data);
        const newArray = dataKeys.map((element, index) => {
            const { className, value, isObject, type } = checkValueForStyle(dataValues[index]);
            return <JsonNode className={className} value={value} element={element} index={index} length={dataKeys.length} isObject={isObject} valueType={type} />
        });
        return newArray;
    }

    const checkValueForStyle = (value) => {
        switch (typeof (value)) {
            case 'string':
                return { className: css.string, value: "\"" + value + "\"", isObject: false, type: "string" };
            case 'number':
                return { className: css.number, value, isObject: false, type: "number" }
            case 'boolean':
                return { className: css.boolean, value, isObject: false, type: "boolean" }
            default:
                if (Array.isArray(value)) {
                    return { className: css.array, value: <DisplayArray data={value} />, isObject: true, type: "array" }
                } else if (typeof (value) === 'object') {
                    return { className: css.object, value: (Object.keys(value).length === 0 ? "{}" : <DisplayObject data={value} />), isObject: true, type: "object" }
                }
        }
    }

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