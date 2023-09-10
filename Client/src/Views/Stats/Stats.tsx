import React from "react"
import style from "./Stats.module.css"
import MatchResults from "../../Components/MatchResults/MatchResults"
import AttackZones from "../../Components/AttackZones/AttackZones"
import MatchStatistics from "../../Components/MatchStatistics/MatchStatistics"

const Stats : React.FC = () => {

    return(
        <div>
            <MatchResults/>
            <div className={style.container}>
                <MatchStatistics/>
                <AttackZones/>




            </div>

        </div>
    )

    
}

export default Stats