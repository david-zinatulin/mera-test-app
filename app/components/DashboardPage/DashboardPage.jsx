import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../assets/data';
import css from './DashboardPage.module.css';
import DisplayObject from './DisplayObject';

const DashboardPage = ({ title }) => (
    <article>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div>
            <code className={css.code}>
                <DisplayObject data={data} />
            </code>
        </div>
    </article>
);

export default DashboardPage;
