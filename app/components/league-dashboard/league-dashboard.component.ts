import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { League } from 'src/app/models/league';
import { StandingsService } from 'src/app/services/standings.service';

@Component({
  selector: 'app-league-dashboard',
  templateUrl: './league-dashboard.component.html',
  styleUrls: ['./league-dashboard.component.css']
})
export class LeagueDashboardComponent {

  constructor(private standingService: StandingsService) {}

  ngOnInit(){}

  columnDefs: ColDef[] = [
    { headerName: '', field: 'rank' },
    { headerName: '' ,field: 'team.logo',  cellRenderer: '<span><img border="0" width = "15" height="10" src=team.logo ></span>' },
    { headerName: 'Name', field: 'team.name' },
    { headerName: 'Games', field: 'all.played' },
    { headerName: 'W', field: 'all.win' },
    { headerName: 'L', field: 'all.lose' },
    { headerName: 'D', field: 'all.draw' },
    { headerName: 'Goal Difference', field: 'goalsDiff' },
    { headerName: 'Points' ,field: 'points' },

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

getStandings(league: string) {
  
  this.standingService.getStandingsJson().subscribe((data:any) => {
      this.rowData = data.response[0].league.standings[0]
    });
  // this.standingService.getStandings(league).subscribe((data:League[]) => {
  //   console.log(data);
  // });
}

}
