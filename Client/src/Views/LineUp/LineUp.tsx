import React, { useEffect, useState } from "react"
import style from "./LineUp.module.css"
import axios from "axios"

interface teamInterface {
    teamname:String,
    tactic:String,
    lineup:Array<lineupInterface>

}

interface lineupInterface {
    dorsal:number,
    performance:number,
    player:playerInterface
}

interface playerInterface {
    role:String,
    condition:number,
    name:String,
    lastName:String

}
const LineUp : React.FC = () => {


const [leftTeam, setLeftTeam] = useState<teamInterface | null >()
const [rightTeam, setRightTeam] = useState<teamInterface | null>()
 

useEffect( ()=>{
   axios.get("http://localhost:3001/match")
    .then(({data})=>{
        setLeftTeam(data.left)
        setRightTeam(data.right)
        
    }) 

 console.log("estos son los equipos", leftTeam, rightTeam);
    
},[])

    return(
        <div className={style.container}>
            {/* <div className={style.teamtable}> */}
            <table className={style.teamtable}>

                <thead>
                    <tr><div><p>{leftTeam?.teamname}</p> <p>{leftTeam?.tactic}</p></div></tr>

                        <tr className={style.columnas}>


                        
                        <th className={style.th1}>LineUp</th>

                        <th className={style.th2}>Player</th>
                        
                        <th className={style.th1}>Rayito</th>
                        
                        <th className={style.th1}>Rating</th>


                        </tr>
                </thead>

                <tbody>
                    {leftTeam? leftTeam.lineup.map((player)=>{
                      
                        return <tr className={style.columnas}>
                        <th>{player.dorsal}</th>
                        <td>{player.player.name.slice(0,1)}. {player.player.lastName}</td>
                        <th>{player.player.condition}</th>
                        <th>{player.performance}</th>


                    </tr>

                    })
                    :null
                    }
                </tbody>

            </table>

            <table className={style.teamtable}>

<thead>
    <tr><div><p>{rightTeam?.teamname}</p> <p>{rightTeam?.tactic}</p></div></tr>

        <tr className={style.columnas}>


        
        <th className={style.th1}>LineUp</th>

        <th className={style.th2}>Player</th>
        
        <th className={style.th1}>Rayito</th>
        
        <th className={style.th1}>Rating</th>


        </tr>
</thead>

<tbody>
    {rightTeam? rightTeam.lineup.map((player)=>{
      
        return <tr className={style.columnas}>
        <th>{player.dorsal}</th>
        <td>{player.player.name.slice(0,1)}. {player.player.lastName}</td>
        <th>{player.player.condition}</th>
        <th>{player.performance}</th>


    </tr>

    })
    :null
    }
</tbody>

</table>

        

        </div>
    )

    
}

export default LineUp