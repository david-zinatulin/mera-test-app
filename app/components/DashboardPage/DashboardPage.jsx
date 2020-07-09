import React from 'react';
import { Helmet } from 'react-helmet';
import data from "../../assets/data";
import DisplayObject from "./DisplayObject";
import css from "./DashboardPage.module.css";

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      <code className={css.code}>
        <DisplayObject data={data} />
      </code>
    </div>
  </article>
)

export default DashboardPage;