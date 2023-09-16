import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { League } from 'src/app/models/league';
import { StandingsService } from 'src/app/services/standings.service';
import { FixturesDetailsComponent } from '../fixtures-details/fixtures-details.component';
import { LinkRenderComponent } from 'src/app/components/link-render/link-render.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-dashboard',
  templateUrl: './league-dashboard.component.html',
  styleUrls: ['./league-dashboard.component.css']
})
export class LeagueDashboardComponent {

  public leagueId: number | undefined; 
  private readonly leagueIds : any = {
    england: 39,
    spain: 107,
    germany: 78,
    itlay: 71,
    france: 61,
  };
  constructor(private standingService: StandingsService,private route:ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.leagueId = +params['teamId'];
      console.log(params);
      this.getStandings(this.leagueId);
    });
    
  }

  columnDefs: any[] = [
    { headerName: '', field: 'rank', width:100 },
    { headerName: '' ,field: 'team.logo',width:100,  cellRenderer: (params: any) => this.getImages(params)},
    { headerName: 'Name', cellRenderer: LinkRenderComponent },
    // { headerName: 'Name', field: 'team.name', cellRenderer:(params: any) => this.getLinks(params)},
    { headerName: 'Games', field: 'all.played',width:100 },
    { headerName: 'W', field: 'all.win',width:100 },
    { headerName: 'L', field: 'all.lose' ,width:100},
    { headerName: 'D', field: 'all.draw' ,width:100},
    { headerName: 'Goal Difference', field: 'goalsDiff',width:100 },
    { headerName: 'Points' ,field: 'points' ,width:100},

];
rowData = [];
// rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 }
// ];

getStandings(league: string | number) {
  
  // this.standingService.getStandingsJson().subscribe((data:any) => {
  //     this.rowData = data.response[0].league.standings[0]
  //   });
  this.standingService.getStandings(league).subscribe((data:any) => {
    console.log(data);
    this.rowData = data.response[0].league.standings[0];
  });
}

getImages (params: any) {
  console.log(params);
  
  return `<img style="height:20px; width:20px" src=${params.data.team.logo } />`;
}

getLinks(params: any) {
  return `<a [routerLink]="teams">${params.data.team.name}</a>`

  // [routerLink]="['teams', ${params.data.team.id}]"
}

}
