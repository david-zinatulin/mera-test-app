import React from 'react';
import { Helmet } from 'react-helmet';
import data from "../assets/data";

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      <code lang="javascript">{data.glossary.title}</code>
    </div>
  </article>
)

export default DashboardPage;