import React, {useState} from 'react';
import s from './nodeitem.module.css'
import plus from '../img/icn-plus.png'
import minus from '../img/icn-minus.png'

const NodeItem = (props) => {
    const [isOpened, setIsOpened] = useState(false);
        return (
            <React.Fragment>
                <div className={s.nodeItemContainer}>
                    <div className={s.nodeItem} onClick={() => setIsOpened(!isOpened)}>
                        <p>{props.title}</p>
                        {isOpened ? <img src={minus} alt="icn-minus" /> : <img src={plus} alt="icn-plus" />}
                    </div>
                    {isOpened ? props.children : null}
                </div>
            </React.Fragment>
        );
}

export default NodeItem;
