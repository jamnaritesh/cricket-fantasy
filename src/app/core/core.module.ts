import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import {DataViewModule} from 'primeng/dataview';
import {AccordionModule} from 'primeng/accordion';     
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';    
import {PanelModule} from 'primeng/panel';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button'


import { LoginComponent } from './login/login.component';
import { FixtureListComponent } from './fixture-list/fixture-list.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    LoginComponent, 
    FixtureListComponent, 
    MatchDetailComponent, 
    SidenavComponent, ResultsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DataViewModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    SidebarModule,
    ButtonModule
  ],
  exports:[
    LoginComponent, 
    FixtureListComponent, 
    MatchDetailComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
