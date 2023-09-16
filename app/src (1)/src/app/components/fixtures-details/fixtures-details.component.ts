import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';
import { StandingsService } from 'src/app/services/standings.service';

@Component({
  selector: 'app-fixtures-details',
  templateUrl: './fixtures-details.component.html',
  styleUrls: ['./fixtures-details.component.css']
})
export class FixturesDetailsComponent implements OnInit{
  public cellValue!: any;
  public teamId: Number | undefined;
  public country: String = '';
  public columnDefs: any = [
    { headerName: '' ,field: 'team.logo',  cellRenderer: (params: any) => this.getImages(params)},
    { headerName: '', field: 'teams.home.name' },
    { headerName: '', field: 'score.fulltime.home' },
    { headerName: '', field: '', valueFormatter: this.getFormattedValue },
    { headerName: '', field: 'score.fulltime.away' },
    { headerName: '', field: 'teams.away.logo', cellRenderer: (params: any) => this.getAwayImages(params) },
    { headerName: '', field: 'teams.away.name' },
    

  ];
  public rowData = [];
  constructor (public route: ActivatedRoute,
    public router: Router,
    public standingService: StandingsService) {}
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.teamId = +params['teamId'];
      this.getTeamFixtures(this.teamId);
    });
    
  }

  getTeamFixtures(teamId: Number) {
    this.standingService.getTopListTeams(teamId).subscribe((data: any) => {
      // Handle the response data, which contains fixture information
      this.rowData = data.response;
      this.country = data.response[0].league.id;
      console.log(data);
    });
  }

  getImages (params: any) {
    console.log(params);
    
    return `<img style="height:20px; width:20px" src=${params.data.teams.home.logo } />`;
  }

  getAwayImages(params: any) {
    console.log(params);
    
    return `<img style="height:20px; width:20px" src=${params.data.teams.away.logo } />`;
  }

  getFormattedValue(params: []) {
    return '-';
  }

  navigateToHome() {
    this.router.navigateByUrl('/league')
  }


}
