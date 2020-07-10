import React, { useState } from 'react';
import NodeItem from "../NodeItemComponent/NodeItem";
import s from './leafitem.module.css'

const LeafItem = (props) => {

    const [itemType, setItemType] = useState('');

    return (
        <div>
            {props.jsonData ? (
                // for leaves
                typeof props.jsonData === 'number' ||
                typeof props.jsonData === 'string' ||
                typeof props.jsonData === 'boolean' ? (
                    <React.Fragment>
                        <div className={s.leafContainer}>
                            <p className={s.leafName}>{ props.itemName }:&nbsp; </p>
                            <p className={s.leafValue}> {props.jsonData.toString()} </p>
                        </div>
                    </React.Fragment>
                ) : (
                    // for nodes
                    <NodeItem title={ props.itemName }>
                        {Object.values(props.jsonData).map((currItem, i) => (
                            <LeafItem
                                jsonData={currItem}
                                itemName={Object.getOwnPropertyNames(props.jsonData)[i]}
                            />
                        ))}
                    </NodeItem>
                )
            ) : (
                'null'
            )}
        </div>
    );
}

export default LeafItem;
