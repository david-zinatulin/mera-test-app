import React from 'react';
import { Helmet } from 'react-helmet';
import style from './NotFoundPage.css'
const NotFoundPage = props => (
  <article>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <div className={style.notFound}>
      404
    </div>
  </article>
)

export default NotFoundPage;