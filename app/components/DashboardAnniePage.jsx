import React from 'react';

import testData from "../assets/test-data";
import LeafItem from "./LeafItemComponent/LeafItem";
import s from './DashboardAnniePage.module.css';

const DashboardAnniePage = () => {
    return (
        <div className={s.app1}>
            <LeafItem jsonData={testData} itemName="JSON" />
        </div>
    );
};

export default DashboardAnniePage;
