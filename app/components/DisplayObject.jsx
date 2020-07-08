import React from 'react';
import JsonNode from "./JsonNode";
import { random } from 'lodash';

const DisplayObject = ({ data }) => {
    const prepareJson = (data) => {
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data);
        const newArray = dataKeys.map((element, index) => {
            const { style, value } = checkValueForStyle(dataValues[index]);
            if (!React.isValidElement(value)) {
                return {
                    __html: "<span style=\"color: green\">\"" + element + "\"</span>" +
                        "<span>: </span>" +
                        "<span style=\"" + style + "\">" + value + "</span>" + (index === (dataKeys.length - 1) ? "" : "<span>,</span>")
                }
            } else {
                return <JsonNode value={value} element={element} index={index} length={dataKeys.length} />
            }
        });
        return newArray;
    }

    const checkValueForStyle = (value) => {
        switch (typeof (value)) {
            case 'string':
                return { style: "color: purple", value: "\"" + value + "\"" };
            case 'number':
                return { style: "color: #24D616", value }
            default:
                if (Array.isArray(value)) {
                    return { style: "color: orange", value: "[ " + value + " ]" };
                } else if (typeof (value) === 'object') {
                    return {
                        style: "color: #159A", value: <DisplayObject data={value} />
                    }
                }
        }
    }

    //TODO: Proper array displaying
    const checkArrayForCode = (array) => {
        return array.map((element, index) => {

        });
    }

    const generateKey = (index) => {
        return index * 2 + random(1000000);
    }

    const jsonArray = prepareJson(data);

    return jsonArray.map((elem, index) => {
        let base;
        let key = generateKey(index);
        if (!React.isValidElement(elem)) {
            base = <div key={key} style={{ marginLeft: 30 + "px" }} dangerouslySetInnerHTML={elem}></div>;
        } else {
            base = <div key={key} style={{ marginLeft: 30 + "px" }} >{elem}</div>;
        }
        if (jsonArray.length > 1) {
            let bracketKey = generateKey(index);
            if (index === 0) {
                let array = [];
                array.push(<div key={bracketKey}>{"{"}</div>);
                array.push(base);
                return array;
            }
            if (index === (jsonArray.length - 1)) {
                let array = [];
                array.push(base);
                array.push(<div key={bracketKey}>{"}"}</div>)
                return array;
            }
        } else {
            let array = [];
            array.push(<div key={generateKey(index)}>{"{"}</div>);
            array.push(base);
            array.push(<div key={generateKey(index)}>{"}"}</div>)
            return array;
        }
        return base;
    })
}

export default DisplayObject;