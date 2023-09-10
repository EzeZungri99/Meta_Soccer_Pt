export interface MatchStats {
    matchId: string
    leftTeam: TeamStats
    rightTeam: TeamStats
    leftFieldPlayers: PlayerStats[]
    leftBenchPlayers: PlayerStats[]
    rightFieldPlayers: PlayerStats[]
    rightBenchPlayers: PlayerStats[]
  }
  
  export interface TeamStats {
    goals: number
    shots: number
    shotsOnTarget: number
    shotsOffTarget: number
    assists: number
    passes: number
    shortPasses: number
    longPasses: number
    highPasses: number
    slidings: number
    interferes: number
    fouls: number
    deflects: number
    offsides: number
    cornerKicks: number
    freeKicks: number
    penaltyKicks: number
    yellowCards: number
    redCards: number
      attackZones: {
          left: number
          middle: number
          right: number
      }
  }
  
  export interface PlayerStats {
    playerId: string
    numberOfGoals: number
    goals: any[]
    numberOfShots: number
    shots: number[][]
    numberOfPasses: number
    numberOfShortPasses: number
    shortPasses: number[][]
    numberOfLongPasses: number
    longPasses: any[]
    numberOfHighPasses: number
    highPasses: number[][]
    assists: number
    numberOfSlidings: number
    slidings: any[]
    numberOfFouls: number
    fouls: any[]
    numberOfInterferes: number
    interferes: number[][]
    deflects: number
    goalieReceivedGoals: number
    yellowCards: number
    redCards: number
    performance: number
  }