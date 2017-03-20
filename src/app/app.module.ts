import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart.component';
import { KPIComponent } from './kpi.component';

import { PiDataService } from './pi-data.service';


@NgModule({
    declarations: [
        AppComponent,
        ChartComponent,
        KPIComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterializeModule
    ],
    providers: [PiDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
