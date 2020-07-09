import React from 'react';
import { Helmet } from 'react-helmet';
import style from './LoginPage.css';
const LoginPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className={style.loginPage}>
      Login
    </div>
  </article>
)

export default LoginPage;