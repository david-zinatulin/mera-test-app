import React from 'react';
import data from "../assets/data";
import LeafItem from "./LeafItemComponent/LeafItem";
import s from './DashboardAnniePage.module.css'

let DashboardAnniePage = (props) => {
    return (
        <div className={s.app1}>
            <LeafItem jsonData={data} itemName="JSON" />
        </div>
    );
};

export default DashboardAnniePage;
