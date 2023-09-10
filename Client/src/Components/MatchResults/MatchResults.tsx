import React from 'react';
import style from "./MatchResults.module.css"


const MatchResults: React.FC = () => {
    return (
       <div className={style.container}>


          <div className={style.teamresults}>
            
            <div className={style.teamA}>
                <div className={style.squareA}>
                    <div className={style.number}>5</div>
                </div>

            </div>

            <div className={style.teamB}>
                 <div className={style.squareB}>
                    <div className={style.number}>5</div>
                </div>

            </div>

          </div>


          <div className={style.points}> + 3 Points
          </div>
          <div className={style.a}> 4
          </div>

       </div> 
    )
};

export default MatchResults;