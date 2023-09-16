import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }

  private _leagues: Subject<Array<League>> = new BehaviorSubject<Array<League>>([]);
  // private apiKey = '89e95f39f83f976374c0ca4447ff12ac__';
  // private apiKey = '59c374a599ebc97a6f6b6ec5fa2dd68e';
  //  private apiKey = '7a34be7e65ac0b9ecd709b95fe683e33';
   private apiKey = 'af1fb7cc8a8645f9378caadbcb6b3461';
  private API = 'https://v3.football.api-sports.io';
  private readonly currentYear: number = new Date().getFullYear();
  public readonly leagues: Observable<Array<League>> = this._leagues.asObservable();

  private readonly leagueId : any = {
    england: 39,
    spain: 107,
    germany: 78,
    italy: 71,
    france: 61,
  };
  getStandings(
    league: string | number,
    season: string = this.currentYear.toString()
  ): Observable <League[]>{
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey,
    });
    let reqParam = typeof(league) == 'string' ? this.leagueId[league] : league;
    return this.http
    .get<League[]>( `${this.API}/standings?league=${reqParam}&season=${season}`,
      { headers }
    )
    .pipe(
      map((response) => {
        return response;
      })
    );
  }

  getStandingsJson() {
    return this.http.get('/assets/response.json')
  }

  getTopListTeams(
      teamId: Number,
      season: string = this.currentYear.toString()
    ) {
      const headers = new HttpHeaders({
        'x-rapidapi-host': 'v3.football.api-sports.io/fixtures',
        'x-rapidapi-key': this.apiKey,
      });
  
      return this.http
        .get(`${this.API}/fixtures?team=${teamId}&season=${season}&last=10`, {
          headers,
        })
        .pipe(
          map((response) => {
            return response;
          })
        );
    }


}
