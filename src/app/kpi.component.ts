import { Component, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'my-kpi',
    templateUrl: './kpi.component.html',
    styleUrls: ['./kpi.component.css']
})
export class KPIComponent implements OnChanges {
    @Input()
    data: any;
     constructor(){

     }

     ngOnChanges(change: any){
         console.log("ngOnChanges");
     }

    }
