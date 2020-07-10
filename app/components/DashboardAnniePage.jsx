import React from 'react';
import data from '../assets/data';
import LeafItem from './LeafItemComponent/LeafItem.jsx';
import s from './DashboardAnniePage.module.css';

const DashboardAnniePage = () => {
    return (
        <div className={s.app1}>
            <LeafItem jsonData={data} itemName="JSON" />
        </div>
    );
};

export default DashboardAnniePage;
