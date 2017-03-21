import { Component, AfterViewInit, ElementRef, HostListener, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'my-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
    @Input()
    data: any;

     title = 'Hourly Production';
     private chart: any;


     constructor(
         private elementRef: ElementRef
     ){

     }
     ngAfterViewInit() {
//         this.chart = d3.select(".chart");
//         console.log("rect:",this.chart.node().parentNode.getBoundingClientRect());
//         console.log("ngAfterViewInit");
//         if(typeof this.data !== "undefined"){
////             this.drawChart(this.chart, this.data);
//         }
     }

     ngOnChanges(change: any){
         this.chart  = this.elementRef.nativeElement.querySelector('.chart');
         this.drawChart(this.chart, this.data);
         console.log("ngOnChanges");
     }

     @HostListener('window:resize', ['$event'])
     onResize(event) {
         this.drawChart(this.chart, this.data);
     }

    drawChart(container, data){
        //create and size svg container
        let height = Math.trunc( container.clientWidth / 64 * 27);
        let width = Math.trunc(container.clientWidth);

        console.log("w-" + width + " h-" + height);
        let d3Container = d3.select(container);
        d3Container.select("svg").remove();
        let svg = d3Container.append("svg")
        .attr("height", height )
        .attr("width", width);
        svg.append('rect')
            .attr('class', 'chart-background')
            .style('height', height)
            .style('width', width);

        //set chart bounds
        let margin = {top: 10, right: 10, bottom: 30, left: 36};
        let insideWidth = width - margin.left - margin.right;
        let insideHeight =  height - margin.top - margin.bottom;
        let g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        if(typeof data === "undefined") return;
        //prepare data
        // keep only good data
        let items : any[] = [];
        for(let item of data.Items){
            if(item.Good){
                let d = {value: item.Value, timestamp: new Date(item.Timestamp)};
                items.push(d);
            }
        }

        //set scales
        let xScale = d3.scaleTime()
        .domain(d3.extent(items, function(d) { return d.timestamp}))
        .rangeRound([0,insideWidth]);

        let yScale = d3.scaleLinear()
        .domain(d3.extent(items, function(d) { return d.value}))
        .rangeRound([insideHeight,0]);

        //draw series
        let line = d3.line()
        .x(function(d:any) { return xScale(d.timestamp); })
        .y(function(d:any) { return yScale(d.value); });

        g.append("path")
            .datum(items)
            .attr("class", "line")
            .attr("d", line);

        //set x-axis
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + insideHeight + ")")
            .call(d3.axisBottom(xScale)
                 .ticks(Math.trunc(insideWidth/100))
                 );

        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(yScale)
                  .ticks(Math.trunc(insideHeight/40))
                 )
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .style("text-anchor", "end")
            .text("rpms/liter");
        //label axis



    }
}
