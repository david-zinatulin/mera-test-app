import React from 'react';
import { Helmet } from 'react-helmet';
import data from "../assets/data";
import { array } from 'prop-types';

const prepareJson = (data, needObject) => {
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  const newArray = dataKeys.map((element, index) => {
    const { style, value } = checkValueForStyle(dataValues[index])
    if (needObject) {
      return {
        __html: "<span style=\"color: green\">\"" + element + "\"</span>" +
          "<span>: </span>" +
          "<span style=\"" + style + "\">" + value + "</span>"
      }
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
      } else {
        //TODO: correctly display the object
        //inserts __html objects into __html objects
        return {
          style: "color: #159A", value: displayObject(value)
        }
      }
  }
}

const displayObject = (data) => {
  const jsonArray = prepareJson(data, true);
  return jsonArray.map((elem, index) => {
    const base = <div style={{ marginLeft: 30 + "px" }} dangerouslySetInnerHTML={elem}></div>;
    if (jsonArray.length > 1) {
      if (index === 0) {
        let array = [];
        array.push(<div>{"{"}</div>);
        array.push(base);
        return array;
      }
      if (index === (jsonArray.length - 1)) {
        let array = [];
        array.push(base);
        array.push(<div>{"}"}</div>)
        return array;
      }
    } else {
      let array = [];
      array.push(<div>{"{"}</div>);
      array.push(base);
      array.push(<div>{"}"}</div>)
      return array;
    }
    return base;
  })
}

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      <code>
        {displayObject(data)}
        {displayObject(data.GlossDiv)}
        {displayObject(data.GlossDiv.GlossList)}
        {displayObject(data.GlossDiv.GlossList.GlossEntry)}
        {displayObject(data.GlossDiv.GlossList.GlossEntry.GlossDef)}
      </code>
    </div>
  </article>
)

export default DashboardPage;