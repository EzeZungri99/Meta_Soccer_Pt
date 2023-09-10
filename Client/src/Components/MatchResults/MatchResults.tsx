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
            <div className={style.teamName}>{teamNameL}<div style={{width:"40px", height:"65px", backgroundColor:"rgba(61, 114, 253, 1)", borderRadius:"45%"}}></div></div>
                <div className={style.squareA} style={matchScore[0] > matchScore[1]? {borderLeftColor:"2px solid green"} :{}}>
                    <div className={style.number} >{matchScore[0]}</div>
                </div>

            </div>
                
            <div style={{height:"30px",width:"1px",backgroundColor:"white",position:"absolute"}}></div>
            <div className={style.teamB}>
                 <div className={style.squareB} style={matchScore[0] < matchScore[1]? {borderRight:"5px solid green"} :{}}>
                    <div className={style.number} >{matchScore[1]}</div>
                </div>
                <div className={style.teamName}><div style={{width:"40px", height:"65px",  backgroundColor:"rgba(255, 100, 177, 0.6)", borderRadius:"45%"}}></div>{teamNameR}</div>

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