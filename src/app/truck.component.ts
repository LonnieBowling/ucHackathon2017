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
        title: "State",
        value: "Running",
        units: ""
    }

    private yesterdayProd: any = {
        title: "Speed",
        value: "15.3",
        units: "mph"
    }

    private monthlyProd: any = {
        title: "Fuel Score",
        value: "10,034",
        units: "rev/liter"
    }
    
        private todayProd1: any = {
        title: "Idle Hours",
        value: "2.4",
        units: "hr"
    }

    private yesterdayProd1: any = {
        title: "Loading Hours",
        value: "1.6",
        units: "hr"
    }

    private monthlyProd1: any = {
        title: "Running Hours",
        value: "22.2",
        units: "hr"
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
