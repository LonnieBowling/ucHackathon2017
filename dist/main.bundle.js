webpackJsonp([2,4],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=C:/@github/ucHackathon2017/src/polyfills.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pi_data_service__ = __webpack_require__(493);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(piDataService) {
        this.piDataService = piDataService;
        this.title = 'Hourly Production';
        this.todayProd = {
            title: "Today's Production",
            value: "500",
            units: "Tons"
        };
        this.yesterdayProd = {
            title: "Yesterday's Production",
            value: "7,300",
            units: "Tons"
        };
        this.monthlyProd = {
            title: "Monthly Production",
            value: "5,400,000",
            units: "Tons"
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.piDataService.getPIData().subscribe(function (response) {
            _this.data1 = response.json();
        }, function (error) {
            _this.error = error.json();
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(629),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pi_data_service__["a" /* PiDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__pi_data_service__["a" /* PiDataService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/@github/ucHackathon2017/src/app.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';
var PiDataService = (function () {
    function PiDataService(http) {
        this.http = http;
        //    https://proghackuc2017.osisoft.com/piwebapi/streams/A0EZ2p7MdUQTUCtLlKDN7d5QAQyAVZw8L5xGpVwANOjb6cASXFvOdnMjFs7YPKa9YA81QU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURVxUUlVDSyA0MDF8QUZUUkNMUiBURU1Q/plot
        this.piWebApiURL = 'https://devdata.osisoft.com/piwebapi';
        this.cdt158PlotData = '/streams/P0W6Wlk0_Utku9vWTvxg45oAAwAAAAUElTUlYxXENEVDE1OA/plot';
        //private piWebApiURL = 'https://proghackuc2017.osisoft.com/piwebapi';
        //private cdt158PlotData = '/streams/A0EZ2p7MdUQTUCtLlKDN7d5QAQyAVZw8L5xGpVwANOjb6cASXFvOdnMjFs7YPKa9YA81QU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURVxUUlVDSyA0MDF8QUZUUkNMUiBURU1Q/plot';
        // data format -----
        //{
        //  "Links": {},
        //  "Items": [
        //    {
        //      "Timestamp": "2016-12-14T22:50:07.4432678Z",
        //      "Value": 65.13365,
        //      "UnitsAbbreviation": "",
        //      "Good": true,
        //      "Questionable": false,
        //      "Substituted": false
        //    },
        //    {
        //      "Timestamp": "2016-12-15T22:50:08Z",
        //      "Value": {
        //        "Name": "No Data",
        //        "Value": 248,
        //        "IsSystem": true
        //      },
        //      "UnitsAbbreviation": "",
        //      "Good": false,
        //      "Questionable": false,
        //      "Substituted": false
        //    }
        //    ...
        //  "UnitsAbbreviation": ""
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    PiDataService.prototype.getPIData = function () {
        var username = 'webapiuser';
        var password = '!try3.14webapi!';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        return this.http.get(this.piWebApiURL + this.cdt158PlotData, { headers: headers });
    };
    PiDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PiDataService);
    return PiDataService;
    var _a;
}());
//# sourceMappingURL=C:/@github/ucHackathon2017/src/pi-data.service.js.map

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 506;


/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(615);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/@github/ucHackathon2017/src/main.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chart_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__kpi_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pi_data_service__ = __webpack_require__(493);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__kpi_component__["a" /* KPIComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["MaterializeModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__pi_data_service__["a" /* PiDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/@github/ucHackathon2017/src/app.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent(elementRef) {
        this.elementRef = elementRef;
        this.title = 'Hourly Production';
    }
    ChartComponent.prototype.ngAfterViewInit = function () {
        //         this.chart = d3.select(".chart");
        //         console.log("rect:",this.chart.node().parentNode.getBoundingClientRect());
        //         console.log("ngAfterViewInit");
        //         if(typeof this.data !== "undefined"){
        ////             this.drawChart(this.chart, this.data);
        //         }
    };
    ChartComponent.prototype.ngOnChanges = function (change) {
        this.chart = this.elementRef.nativeElement.querySelector('.chart');
        this.drawChart(this.chart, this.data);
        console.log("ngOnChanges");
    };
    ChartComponent.prototype.onResize = function (event) {
        this.drawChart(this.chart, this.data);
    };
    ChartComponent.prototype.drawChart = function (container, data) {
        //create and size svg container
        var height = Math.trunc(container.clientWidth / 64 * 27);
        var width = Math.trunc(container.clientWidth);
        console.log("w-" + width + " h-" + height);
        var d3Container = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](container);
        d3Container.select("svg").remove();
        var svg = d3Container.append("svg")
            .attr("height", height)
            .attr("width", width);
        svg.append('rect')
            .attr('class', 'chart-background')
            .style('height', height)
            .style('width', width);
        //set chart bounds
        var margin = { top: 10, right: 10, bottom: 30, left: 36 };
        var insideWidth = width - margin.left - margin.right;
        var insideHeight = height - margin.top - margin.bottom;
        var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        if (typeof data === "undefined")
            return;
        //prepare data
        // keep only good data
        var items = [];
        for (var _i = 0, _a = data.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Good) {
                var d = { value: item.Value, timestamp: new Date(item.Timestamp) };
                items.push(d);
            }
        }
        //set scales
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["extent"](items, function (d) { return d.timestamp; }))
            .rangeRound([0, insideWidth]);
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain(__WEBPACK_IMPORTED_MODULE_1_d3__["extent"](items, function (d) { return d.value; }))
            .rangeRound([insideHeight, 0]);
        //draw series
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]()
            .x(function (d) { return xScale(d.timestamp); })
            .y(function (d) { return yScale(d.value); });
        g.append("path")
            .datum(items)
            .attr("class", "line")
            .attr("d", line);
        //set x-axis
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + insideHeight + ")")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](xScale)
            .ticks(Math.trunc(insideWidth / 100)));
        g.append("g")
            .attr("class", "axis axis--y")
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](yScale)
            .ticks(Math.trunc(insideHeight / 40)))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .style("text-anchor", "end")
            .text("Tons");
        //label axis
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ChartComponent.prototype, "onResize", null);
    ChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-chart',
            template: __webpack_require__(630),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], ChartComponent);
    return ChartComponent;
    var _a;
}());
//# sourceMappingURL=C:/@github/ucHackathon2017/src/chart.component.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(492);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(613);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/@github/ucHackathon2017/src/index.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KPIComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KPIComponent = (function () {
    function KPIComponent() {
    }
    KPIComponent.prototype.ngOnChanges = function (change) {
        console.log("ngOnChanges");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], KPIComponent.prototype, "data", void 0);
    KPIComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-kpi',
            template: __webpack_require__(631),
            styles: [__webpack_require__(628)]
        }), 
        __metadata('design:paramtypes', [])
    ], KPIComponent);
    return KPIComponent;
}());
//# sourceMappingURL=C:/@github/ucHackathon2017/src/kpi.component.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/@github/ucHackathon2017/src/environment.js.map

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "* >>> .chart-background{\r\n/*\r\n    fill: rgb(48,48,48);\r\n    stroke: none;\r\n    stroke-width: 2px;\r\n*/\r\n        opacity: 0;\r\n\r\n}\r\n\r\n* >>> .line{\r\n    fill: none;\r\n    stroke: #673ab7;\r\n    stroke-width: 2.0px;\r\n    opacity: .8;\r\n}\r\n\r\n* >>> .axis path {\r\n    fill: none;\r\n    stroke: white;\r\n    stroke-width: 1.5px;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n* >>> .axis line {\r\n    stroke: white;\r\n    stroke-width: 1.5px;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n* >>> .axis .minor {\r\n    stroke: white;\r\n    stroke-width: 0.4px;\r\n    opacity: .8;\r\n\r\n}\r\n\r\n* >>> .axis text {\r\n    font-family: Arial,Helvetica,sans-serif;\r\n    font-size: 12px;\r\n    fill: white;\r\n    opacity: .8;\r\n\r\n}\r\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<div class=\"black\">\r\n\r\n    <div class=\"navbar-fixed\">\r\n        <nav class=\"blue-grey darken-4\">\r\n            <div class=\"nav-wrapper container gray\">\r\n                <a href=\"#\" class=\"brand-logo\">Barrick Real-Time Haul Truck Monitoring Portal</a>\r\n                <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n                    <li><a href=\"#\">Login</a></li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n\r\n    <div class=\"container\" >\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m4\">\r\n                <my-kpi [data]=\"todayProd\"></my-kpi>\r\n            </div>\r\n            <div class=\"col s12 m4\">\r\n                <my-kpi [data]=\"yesterdayProd\"></my-kpi>\r\n            </div>\r\n            <div class=\"col s12 m4\">\r\n                <my-kpi [data]=\"monthlyProd\"></my-kpi>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"card-panel blue-grey darken-4\">\r\n                <h5 class=\"blue-grey-text text-lighten-5\">\r\n                    {{title}}\r\n                </h5>\r\n                <div>\r\n                    <my-chart [data]=\"data1\"></my-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <footer class=\"page-footer blue-grey darken-4\">\r\n        <div class=\"container\">\r\n\r\n        </div>\r\n        <div class=\"footer-copyright\">\r\n            <div class=\"container\">\r\n                Made by <a href=\"#\">Team PI in the Sky</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"chart\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel blue-grey darken-4\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"center deep-purple-text text-deep-purple-darken-4\">\r\n            <i class=\"material-icons medium\">insert_chart</i>\r\n            <span class=\"flow-text blue-grey-text text-lighten-5\" style=\"vertical-algin:middle;\">{{data.title}}</span>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <h3 class=\"center blue-grey-text text-lighten-5\">{{data.value}}</h3>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(507);


/***/ })

},[659]);
//# sourceMappingURL=main.bundle.map