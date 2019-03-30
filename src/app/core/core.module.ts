import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FixtureListComponent } from './fixture-list/fixture-list.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent, 
    FixtureListComponent, 
    MatchDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    LoginComponent, 
    FixtureListComponent, 
    MatchDetailComponent
  ]
})
export class CoreModule { }
