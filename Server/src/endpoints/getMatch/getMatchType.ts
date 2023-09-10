

export interface Match {
    id: string
    leftLineup: Lineup[]
    leftBench: any[]
    leftInstructions: any
    leftTactic: string
    leftTacticName: string
    leftTacticPositioning: number
    leftTeamAddress: string
    leftTeamInfo: TeamInfo
    rightLineup: Lineup[]
    rightBench: any[]
    rightInstructions: any
    rightTactic: string
    rightTacticName: string
    rightTacticPositioning: number
    rightTeamAddress: string
    rightTeamInfo: TeamInfo
    comments: Comment[]
    performances: Performances
    score: number[]
    startedDatetime: string
  }
  
  export interface Lineup {
    id: string
    disabled: boolean
    dorsal: number
    image: string
    ovr: number
    player: Player
    position: string
    redCard: boolean
    yellowCards: number
  }
  
  export interface Player {
    age: number
    height: number
    id: number
    lastName: string
    condition: number
    level: number
    name: string
    overall: number
    owner: string
    potential: number
    preferredFoot: number
    role: string
    seeds: string[]
    sections: any
    specialAbilities: any[]
    specificRole: string
    weight: number
    imageName: string
  }
  
  export interface TeamInfo {
    id: string
    name: string
    manager: string
    clubAcronym: string
    clubLogo: {
        name: string
        color: string
      }
    lineupOverall: number
    isLineupCompleted: boolean
  }
  
  export interface Comment {
    time: number
    side?: string
    playerId?: string
    commentType: string
  }
  
  export interface Performances {
    left: PerformanceArray
    right: PerformanceArray
  }
  
  export interface PerformanceArray {
    fieldPlayers: number[]
    benchPlayers: number[]
  }