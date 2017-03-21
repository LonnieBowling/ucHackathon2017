import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart.component';
import { KPIComponent } from './kpi.component';
import { HomeComponent }   from './home.component';
import { TruckComponent }   from './truck.component';

import { PiDataService } from './pi-data.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ChartComponent,
        KPIComponent,
        HomeComponent,
        TruckComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterializeModule,
        AppRoutingModule
    ],
    providers: [PiDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
