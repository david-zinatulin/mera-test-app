import React from 'react';
import { Helmet } from 'react-helmet';
import data from "../assets/data";
import { element } from 'prop-types';

const displayJson = () => {
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  const newArray = [];
  dataKeys.forEach((element, index) => {
    const newEl = element + ":" + (typeof (dataValues[index]) === 'object' ? "{...}" : dataValues[index]);
    newArray.push(newEl);
  });
  return newArray;
}

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      <code lang="javascript">
        {/* {Object.keys(data).map(key => <div>{key}</div>)}
        {Object.values(data).map(value =>
          typeof (value) === 'object' ? <div>{"{...}"}</div> : <div>{value}</div>
        )} */}
        <div>{"{"}</div>
        {displayJson().map(elem => <div style={{ marginLeft: 30 + "px" }}>{elem}</div>)}
        <div>{"}"}</div>
      </code>
    </div>
  </article>
)

export default DashboardPage;