import 'rxjs/add/operator/switchMap';
import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


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
    private truck: any;
    private error: any;
    private todayProd: any = {
        title: "Speed",
        value: "15.2",
        units: "mph"
    }

    private yesterdayProd: any = {
        title: "Engine Speed",
        value: "786",
        units: "rpms"
    }

    private monthlyProd: any = {
        title: "Engine Temp",
        value: "119.2",
        units: "deg F"
    }

    constructor(
        private piDataService: PiDataService,    
        private route: ActivatedRoute

    ){

    }
    
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.piDataService.getTruckData(+params['id']))
            .subscribe(response => {
            //truck data
            this.truck = response.json();
            this.name = this.truck.Name;
        });
    }
    
    ngAfterViewInit() {
//        this.piDataService.getTruckData("test").subscribe(
//            response => {
//                this.trucks = response.json();
//                this.name = truck.Name;
//            }, error => {
//                this.error = error.json();
//            }
//        );
    }

}
