import React from 'react';
import style from "./AttackZones.module.css"

const AttackZones: React.FC = () => {
    const attackZones = {
        "attackZone1": 55,
        "attackZone2": 25,
        "attackZone3": 100
    }
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <div className={style.title}>ATTACK ZONES
                </div>
            </div>
            <div className={style.square}>
                <div className={style.zone} style={{ width:"33.3%", height:`${attackZones.attackZone1}%`,clipPath: `polygon(50% 0%, 300% ${200 - attackZones.attackZone1 }%, 50% 100%, -200% ${200 - attackZones.attackZone1}%)` }}>{attackZones.attackZone1}%</div>   


          <div className={style.zone} style={{ width:"33.3%", height:`${attackZones.attackZone2}%`,clipPath: `polygon(50% 0%, 300% ${200 - attackZones.attackZone2 }%, 50% 100%, -200% ${200 - attackZones.attackZone2 }%)`, }}>{attackZones.attackZone2}%</div>   


               <div className={style.zone} style={{ width:"33.3%", height:`${attackZones.attackZone3}%`,clipPath: `polygon(50% 0%, 300% ${200 - attackZones.attackZone3 }%, 50% 100%, -200% ${200 - attackZones.attackZone3 }%)`, }}>{attackZones.attackZone3}%</div>       
            </div>
        </div>
    )
};

export default AttackZones;
