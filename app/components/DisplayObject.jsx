import React from 'react';
import JsonNode from "./JsonNode";
import { random } from 'lodash';
import DisplayArray from './DisplayArray';

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
            case 'boolean':
                return { style: "color: #ff00ff", value }
            default:
                if (Array.isArray(value)) {

                    console.log(value);
                    return { style: "color: orange", value: <DisplayArray /> }

                } else if (typeof (value) === 'object') {
                    return {
                        style: "color: black", value: <DisplayObject data={value} />
                    }
                }
        }
    }

    //TODO: Proper array displaying
    const checkArrayForCode = (array) => {
        const newArray = array.map((element, index) => {
            const { style, value } = checkValueForStyle(element);
            console.log("style: " + style + " , value: " + value);
            return <JsonNode value={element} key={""} />
        });
        console.log(newArray);
        return newArray;
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
            base = <div key={key} style={{ marginLeft: 30 + "px" }}>{elem}</div>;
        }
        let array = [];
        if (jsonArray.length > 1) {
            let bracketKey = generateKey(index);
            if (index === 0) {
                array.push(<div key={bracketKey}>{"{"}</div>);
                array.push(base);
                return array;
            }
            if (index === (jsonArray.length - 1)) {
                array.push(base);
                array.push(<div key={bracketKey}>{"}"}</div>)
                return array;
            }
        } else {
            array.push(<div key={generateKey(index)}>{"{"}</div>);
            array.push(base);
            array.push(<div key={generateKey(index)}>{"}"}</div>)
            return array;
        }
        return base;
    })
}

export default DisplayObject;