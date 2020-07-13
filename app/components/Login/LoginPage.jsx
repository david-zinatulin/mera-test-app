import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Login from './index'

const LoginPage = props => (
  <Fragment>
    <article>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </article>
    <Login />
  </Fragment>
)

export default LoginPage;