import React from 'react';
import { Helmet } from 'react-helmet';

const LoginPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div>
      Login
    </div>
  </article>
)

export default LoginPage;