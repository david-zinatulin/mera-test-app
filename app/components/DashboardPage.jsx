import React from 'react';
import { Helmet } from 'react-helmet';

const EXAMPLE_JSON = {
  "var1": "value1",
  "array": ["1", "2", "3"],
  "object": {
    "var2": "value2"
  }
}

const DashboardPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      Dashboard
      <div>{JSON.stringify(EXAMPLE_JSON)}</div>
    </div>
  </article>
)

export default DashboardPage;