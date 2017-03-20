import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from "rxjs";

//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

@Injectable()
export class PiDataService {
    //    https://proghackuc2017.osisoft.com/piwebapi/streams/A0EZ2p7MdUQTUCtLlKDN7d5QAQyAVZw8L5xGpVwANOjb6cASXFvOdnMjFs7YPKa9YA81QU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURVxUUlVDSyA0MDF8QUZUUkNMUiBURU1Q/plot

    private piWebApiURL = 'https://devdata.osisoft.com/piwebapi';
private cdt158PlotData = '/streams/P0W6Wlk0_Utku9vWTvxg45oAAwAAAAUElTUlYxXENEVDE1OA/plot';

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

private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }

getPIData(): Observable<any> {
    let username = 'webapiuser';
    let password = '!try3.14webapi!';

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    return this.http.get(this.piWebApiURL + this.cdt158PlotData, {headers: headers});
}


}
