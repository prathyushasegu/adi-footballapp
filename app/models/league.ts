export interface League {
    position: number;
    team: {
      id: number;
      name: string;
      crestUrl: string;
    };
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalDifference: number;
  }