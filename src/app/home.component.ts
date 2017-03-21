import { Component, AfterViewInit } from '@angular/core';

import {PiDataService} from './pi-data.service';
import {ChartComponent} from './chart.component';
import {KPIComponent} from './kpi.component';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

    title = 'Hourly Production';

    private data1: any;
    private trucks: any;
    private error: any;
    private todayProd: any = {
        title: "Today's Production",
        value: "500",
        units: "Tons"
    }

    private yesterdayProd: any = {
        title: "Yesterday's Production",
        value: "7,300",
        units: "Tons"
    }

    private monthlyProd: any = {
        title: "Monthly Production",
        value: "5,400,000",
        units: "Tons"
    }

    constructor(
        private piDataService: PiDataService
    ){

    }

    ngOnInit(): void {
        this.piDataService.getTrucks().subscribe(
            response => {
                this.trucks = response.json().Items;
                
            }, error => {
                this.error = error.json();
            }
        );
    }

    ngAfterViewInit() {
        this.piDataService.getPIData().subscribe(
            response => {
                this.data1 = response.json();
            }, error => {
                this.error = error.json();
            }
        );

    }

}
