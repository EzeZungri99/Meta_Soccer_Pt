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

            <table className={style.teamtable}>
        <thead>
          <tr className={style.titletable}>
            <td colSpan={2} className={style.teamname}>
           {leftTeam?.teamname}
            </td>
            <td colSpan={2} className={style.tactic}>
              {leftTeam?.tactic}
            </td>
          </tr>
        </thead>
        <thead>
          <tr className={style.titletable}>
            <th className={style.th1}>LineUp</th>
            <th className={style.th2}>Player</th>
            <th className={style.th1}>Rayito</th>
            <th className={style.th1}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {leftTeam
            ? leftTeam.lineup.map((player) => {
                return (
                  <tr className={style.columns} key={player.dorsal}>
                    <th>{player.dorsal}</th>
                    <td>
                      {player.player.name.slice(0, 1)}. {player.player.lastName}
                    </td>
                    <th className={style.condition}>
                      {player.player.condition}
                    </th>
                    <th>{player.performance}</th>
                  </tr>
                );
              })
            : null}
        </tbody>
            </table>

        

            <table className={style.teamtable}>
        <thead>
          <tr className={style.titletable}>
           
            <td colSpan={2} className={style.teamname}>
            {rightTeam?.teamname}

            </td>
            <td colSpan={2} className={style.tactic}>
              {rightTeam?.tactic}
            </td>
          </tr>
        </thead>
        <thead>
          <tr className={style.titletable}>
            <th className={style.th1}>LineUp</th>
            <th className={style.th2}>Player</th>
            <th className={style.th1}>Condition</th>
            <th className={style.th1}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {rightTeam
            ? rightTeam.lineup.map((player) => {
                return (
                  <tr className={style.columns} key={player.dorsal}>
                    <th>{player.dorsal}</th>
                    <td>
                      {player.player.name.slice(0, 1)}. {player.player.lastName}
                    </td>
                    <th className={style.condition}>
                      {player.player.condition}
                    </th>
                    <th>{player.performance}</th>
                  </tr>
                );
              })
            : null}
        </tbody>
            </table>




    </div>
  );

    
}

export default LineUp