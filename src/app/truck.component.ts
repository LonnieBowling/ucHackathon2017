import { Component, AfterViewInit } from '@angular/core';

import {PiDataService} from './pi-data.service';
import {ChartComponent} from './chart.component';
import {KPIComponent} from './kpi.component';


@Component({
    selector: 'truck',
    templateUrl: './truck.component.html',
    styleUrls: ['./truck.component.css']
})
export class TruckComponent implements AfterViewInit {

    title = 'Hourly Production';

    private name = "";
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
    ngAfterViewInit() {
        this.piDataService.getTruckData().subscribe(
            response => {
                this.trucks = response.json();
                var truckItems = this.trucks.Items;
                this.name = truckItems[0].Name;
            }, error => {
                this.error = error.json();
            }
        );
    }

}
