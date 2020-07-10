import React from 'react';
import NodeItem from '../NodeItemComponent/NodeItem';
import s from './leafitem.module.css';

const LeafItem = ({ jsonData, itemName }) => (
    <div>
        {jsonData ? (
            // for leaves
            typeof jsonData === 'number' || typeof jsonData === 'string' || typeof jsonData === 'boolean' ? (
                <React.Fragment>
                    <div className={s.leafContainer}>
                        <p className={s.leafName}>{itemName}:&nbsp; </p>
                        <p className={s.leafValue}> {jsonData.toString()} </p>
                    </div>
                </React.Fragment>
            ) : (
                // for nodes
                <NodeItem title={itemName}>
                    {Object.values(jsonData).map((currItem, i) => (
                        <LeafItem jsonData={currItem} itemName={Object.getOwnPropertyNames(jsonData)[i]} />
                    ))}
                </NodeItem>
            )
        ) : (
            'null'
        )}
    </div>
);

export default LeafItem;
