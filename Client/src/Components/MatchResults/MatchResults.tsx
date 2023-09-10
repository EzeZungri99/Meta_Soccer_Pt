import React, {useEffect, useState} from 'react';
import style from "./MatchResults.module.css"
import axios from "axios"


const MatchResults: React.FC = () => {
    const [teamNameL, setTeamNameL] = useState<String>("")
    const [teamNameR, setTeamNameR] = useState<String>("")
    const [matchScore, setMatchScore] = useState<number[]>([])
    
    useEffect( ()=>{
      
        axios.get("http://localhost:3001/match")
        .then(({data})=>{
            setTeamNameL(data.left.teamname)
            setTeamNameR(data.right.teamname)
            setMatchScore(data.score)
        }) 
    
        
    },[])
    return (
       <div className={style.container}>


          <div className={style.teamresults}>
            
            <div className={style.teamA}>
            <div>{teamNameL}</div>
                <div className={style.squareA}>
                    <div className={style.number}>{matchScore[0]}</div>
                </div>

            </div>

            <div className={style.teamB}>

                 <div className={style.squareB}>
                    <div className={style.number}>{matchScore[1]}</div>
                </div>
                <div>{teamNameR}</div>

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