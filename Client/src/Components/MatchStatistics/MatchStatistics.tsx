import React from 'react';
import style from "./MatchStatistics.module.css"
import { useEffect,useState } from 'react';
import axios from "axios";

interface Statistic {
    name: string;
    TeamLeft: number;
    TeamRight: number;
}

 interface statsInterface {
    left:{
    goals: number,
    assists: number,
    passes: number,
    longPasses: number,
    shortPasses: number,
    shots: number,
    shotsOffTarget: number,
    shotsOnTarget: number
}
     right:{
        goals: number,
        assists: number,
        passes: number,
        longPasses: number,
        shortPasses: number,
        shots: number,
        shotsOffTarget: number,
        shotsOnTarget: number}
 }




const MatchStatistics: React.FC = () => {
    const [matchStats, setMatchStats] = useState<statsInterface | null>(null)
    console.log("esto es matchStats",matchStats)
    let statistics: Statistic[] = [];
    if(matchStats){
      statistics = [
            { name: "TOTAL SHOTS", TeamLeft: matchStats.left.shots, TeamRight: matchStats.right.shots },
            { name: "SHOTS ON TARGET", TeamLeft: matchStats.left.shotsOnTarget, TeamRight: matchStats.right.shotsOnTarget },
            { name: "SHOTS OFF TARGET", TeamLeft: matchStats.left.shotsOffTarget, TeamRight: matchStats.right.shotsOffTarget },
            { name: "ASSISTS", TeamLeft: matchStats.left.assists, TeamRight: matchStats.right.assists },
            { name: "SHORT PASSES", TeamLeft: matchStats.left.shortPasses, TeamRight: matchStats.right.shortPasses },
            { name: "PASSES", TeamLeft: matchStats.left.passes, TeamRight: matchStats.right.passes },
            { name: "LONG PASSES", TeamLeft: matchStats.left.longPasses, TeamRight: matchStats.right.longPasses }
        ];
    }
    const [showSkills, setShowSkills] = useState(false);

    useEffect(() => {
        const skills = document.getElementById('habilidades');
        const distanciaSkills = window.innerHeight - (skills?.getBoundingClientRect()?.top || 0); // Considera el caso en el que 'skills' sea nulo
        if (distanciaSkills >= 300) {
            setShowSkills(true);
        }
        axios.get("http://localhost:3001/stats").then(({data})=>{
            setMatchStats(data)
        })

    }, []); 

    // const getTotalPercentage = (TeamLeft: number, TeamRight: number) => {
    //     const total = TeamLeft + TeamRight;
    //     return total > 0 ? (TeamRight / total) * 100 : 0;
    // };
    const getTotalPercentage = (Team1: number, Team2: number) => {
        const total = Team1 + Team2;
        return total > 0 ? (Team2 / total) * 100 : 0;
    };

    const scoreBarDiv = (statistic:{TeamLeft:number, TeamRight:number})=>{
        

       if(getTotalPercentage(statistic.TeamLeft,statistic.TeamRight) === 0 && getTotalPercentage(statistic.TeamRight,statistic.TeamLeft) === 0){
       return <div style={{display:"flex"}}>
            <div className={style.draw} style={{ width: "50%" }}>
            </div>
            <div className={style.draw} style={{ width: "50%"  }}>
            </div>
         </div>
    }
       return    <>
       <div className={style.progressoftheleftteam} style={{ width: `${getTotalPercentage(statistic.TeamRight,statistic.TeamLeft)}%` }}>

      </div>
      <div className={style.progress} style={{ width: `${getTotalPercentage(statistic.TeamLeft, statistic.TeamRight)}%` }}>

       </div>
   </>
    }
    return (
        <div className={style.container}>
            <div className={style.contenidoSeccion}>
                <div>
                    {statistics.map((statistic, index) => (
                        <div className={style.items} key={index}>
                            <div>
                  

                                <div className={style.score}>


                                    <div className={style.leftscore}>{statistic.TeamLeft}</div>

                                    <div className={style.title}>{statistic.name}</div>

                                    <div className={style.rightscore}>{statistic.TeamRight}
                                    </div>
                                
                                </div>

                            </div>

                            <div className={style.scoreBar}>
                                {showSkills && (scoreBarDiv(statistic))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatchStatistics;