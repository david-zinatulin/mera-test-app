import React from 'react';
import { Helmet } from 'react-helmet';
import data from "../assets/data";
import DisplayObject from "./DisplayObject";

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      <code>
        <DisplayObject data={data} />
      </code>
    </div>
  </article>
)

export default DashboardPage;