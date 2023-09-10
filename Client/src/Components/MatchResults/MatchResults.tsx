import React from 'react';
import style from "./MatchResults.module.css"


const MatchResults: React.FC = () => {
    return (
       <div className={style.container}>

        <div className={style.teamresults}>
            
            <div className={style.teamA}>
                <br /><br /><br />
                <br /><br />
            </div>

            <div className={style.teamB}>
                <br /><br /><br />
                <br /><br />
            </div>

        </div>


        <div className={style.points}> + 3 Points</div>
        <div className={style.a}> 4</div>

       </div> 
    )
};

export default MatchResults;