import React from "react"
import style from "./ZoneResponsive.module.css"
import MatchResults from "../../Components/MatchResults/MatchResults"
import AttackZones from "../../Components/AttackZones/AttackZones"

const ZoneResponsive : React.FC = () => {

    return(
        <div>
            <div>
            <MatchResults/>

            </div>
            
            <div className={style.container}>
                <AttackZones/>
            </div>

        </div>
    )

    
}

export default ZoneResponsive