import React from 'react';
import { Helmet } from 'react-helmet';

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      Dashboard
    </div>
  </article>
)

export default DashboardPage;