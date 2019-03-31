import { Component, OnInit } from '@angular/core';
import { RequestHandlerService } from 'src/app/request-handler.service';
import { Match } from 'src/app/models/match';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 


@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit {

  constructor(private service: RequestHandlerService) { }

  list: Observable<Match[]>
  match: Match[]
  ngOnInit() {
    //this.service.getMatchList().subscribe(res => {console.log(res);this.match = res;});
    this.list = this.service.getMatchList().pipe(
      map((match: Match[])=> { 
        let matchView = match.map((listing)=>{
          if(listing.team1Bets == 0 && listing.team2Bets == 0)
            {
              listing.team2Bets = 1
              listing.team1Bets = 1
            }
            return listing
        })
        
        return matchView
      })
    )
    
  }

}
