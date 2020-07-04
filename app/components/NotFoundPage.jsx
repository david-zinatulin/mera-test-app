import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      404
    </div>
  </article>
)

export default NotFoundPage;