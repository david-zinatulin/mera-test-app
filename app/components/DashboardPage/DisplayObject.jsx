import React from 'react';
import { generateKey } from '../../js/arrayUtils';
import css from './DashboardPage.module.css';
import KeyValuePair from './KeyValuePair';

const checkValueForStyle = value => {
    switch (typeof value) {
        case 'string':
            return { className: css.string, value: `"${value}"`, isObject: false, type: 'string' };
        case 'number':
            return { className: css.number, value, isObject: false, type: 'number' };
        case 'boolean':
            return { className: css.boolean, value, isObject: false, type: 'boolean' };
        default:
            if (Array.isArray(value)) {
                return {
                    className: css.array,
                    value: value.length === 0 ? '[]' : <DisplayArray data={value} />,
                    isObject: true,
                    type: 'array',
                };
            }
            if (value === null) return { className: css.null, value: `${null}`, isObject: false, type: 'null' };
            return {
                className: css.object,
                value: Object.keys(value).length === 0 ? '{}' : <DisplayObject data={value} />,
                isObject: true,
                type: 'object',
            };
    }
};

const keyValuePairsArray = data => {
    if (data === null) return null;
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    const newArray = dataKeys.map((element, index) => {
        const { className, value, isObject, type } = checkValueForStyle(dataValues[index]);
        return (
            <KeyValuePair
                key={generateKey(index)}
                className={className}
                value={value}
                element={element}
                index={index}
                length={dataKeys.length}
                isObject={isObject}
                valueType={type}
            />
        );
    });
    return newArray;
};

const DisplayArray = ({ data }) => {
    const arrayToDisplay = keyValuePairsArray(data);

    return (
        <React.Fragment>
            <span>[ </span>
            {arrayToDisplay.map((element, index) => {
                return (
                    <div key={generateKey(index)} className={css.arrayElement}>
                        {element}
                    </div>
                );
            })}
            <span> ]</span>
        </React.Fragment>
    );
};

const DisplayObject = ({ data }) => {
    const jsonArray = keyValuePairsArray(data);

    // return jsonArray.map((elem, index) => {
    //     const key = generateKey(index);
    //     const base = (
    //         <div key={key} className={css.line}>
    //             {elem}
    //         </div>
    //     );
    //     const array = [];
    //     if (jsonArray.length > 1) {
    //         const bracketKey = generateKey(index);
    //         if (index === 0) {
    //             array.push(
    //                 <div className={css.separator} key={bracketKey}>
    //                     {'{'}
    //                 </div>,
    //             );
    //             array.push(base);
    //             return array;
    //         }
    //         if (index === jsonArray.length - 1) {
    //             array.push(base);
    //             array.push(
    //                 <div className={css.separator} key={bracketKey}>
    //                     {'}'}
    //                 </div>,
    //             );
    //             return array;
    //         }
    //     } else {
    //         array.push(
    //             <div className={css.separator} key={generateKey(index)}>
    //                 {'{'}
    //             </div>,
    //         );
    //         array.push(base);
    //         array.push(
    //             <div className={css.separator} key={generateKey(index)}>
    //                 {'}'}
    //             </div>,
    //         );
    //         return array;
    //     }
    //     return base;
    // });
    return (
        <React.Fragment>
            <div className={css.separator}>{"{"}</div>
            {jsonArray.map((element, index) => {
                return <div key={generateKey(index)} className={css.line}>{element}</div>
            })}
            <div className={css.separator}>{"}"}</div>
        </React.Fragment>
    )
};

export default DisplayObject;
