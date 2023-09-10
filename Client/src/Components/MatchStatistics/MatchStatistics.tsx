import React from 'react';
import style from "./MatchStatistics.module.css"
import { useEffect,useState } from 'react';
 

interface Statistic {
    name: string;
    TeamLeft: number;
    TeamRight: number;
}

const statistics: Statistic[] = [
    { name: "TOTAL SHOTS", TeamLeft: 1, TeamRight: 0 },
    { name: "SHOTS ON TARGET", TeamLeft: 5, TeamRight: 5 },
    { name: "SHOTS OFF TARGET", TeamLeft: 8, TeamRight: 0 },
    { name: "ASSISTS", TeamLeft: 4, TeamRight: 4 },
    { name: "SHORT PASSES", TeamLeft: 1, TeamRight: 5 },
    { name: "PASSES", TeamLeft: 2, TeamRight: 9 },
    { name: "LONG PASSES", TeamLeft: 0, TeamRight: 23 }
];

const MatchStatistics: React.FC = () => {
    const [showSkills, setShowSkills] = useState(false);

    useEffect(() => {
        const skills = document.getElementById('habilidades');
        const distanciaSkills = window.innerHeight - (skills?.getBoundingClientRect()?.top || 0); // Considera el caso en el que 'skills' sea nulo
        if (distanciaSkills >= 300) {
            setShowSkills(true);
        }
    }, []); 

    const getTotalPercentage = (TeamLeft: number, TeamRight: number) => {
        const total = TeamLeft + TeamRight;
        return total > 0 ? (TeamRight / total) * 100 : 0;
    };

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
                                {showSkills && (
                                         <>

                                           <div className={style.progress} style={{ width: `${getTotalPercentage(statistic.TeamLeft, statistic.TeamRight)}%` }}>

                                           </div>
                                           <div className={`${style.progress} ${statistic.TeamRight > 0 ? style.progressoftherightteam : ''}`} style={{ width: `${100 - getTotalPercentage(statistic.TeamLeft, statistic.TeamRight)}%` }}>

                                           </div>
                                        </>

                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatchStatistics;