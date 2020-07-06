import React from 'react';
import { Helmet } from 'react-helmet';

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      v2
      Dashboard
    </div>
  </article>
)

export default DashboardPage;