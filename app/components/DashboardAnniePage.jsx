import React from 'react';
import data from "../assets/data";
import testData from "../assets/test-data";
import LeafItem from "./LeafItemComponent/LeafItem";
import s from './DashboardAnniePage.module.css'

let DashboardAnniePage = (props) => {
    return (
        <div className={s.app1}>
            <LeafItem jsonData={testData} itemName="JSON" />
        </div>
    );
};

export default DashboardAnniePage;
