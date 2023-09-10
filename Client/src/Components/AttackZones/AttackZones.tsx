import React from 'react';
import style from "./AttackZones.module.css"

const AttackZones: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.title}>ATTACK ZONES
                </div>
            </div>
            <div className={style.square}>    
            </div>
        </div>
    )
};

export default AttackZones;
