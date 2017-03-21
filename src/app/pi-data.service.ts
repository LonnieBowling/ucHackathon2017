import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from "rxjs";

//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

@Injectable()
export class PiDataService {

    private piWebApiURL = 'https://proghackuc2017.osisoft.com/piwebapi';


private headers = new Headers({'Content-Type': 'application/json'});
constructor(private http: Http) { }

getPIData(): Observable<any> {

    let testCall = this.piWebApiURL + '/streams/A0EZ2p7MdUQTUCtLlKDN7d5QAQyAVZw8L5xGpVwANOjb6cASXFvOdnMjFs7YPKa9YA81QU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURVxUUlVDSyA0MDF8QUZUUkNMUiBURU1Q/plot';
    
//   let testCall = 'https://proghackuc2017.osisoft.com/piwebapi/streams/A0EZ2p7MdUQTUCtLlKDN7d5QAQyAVZw8L5xGpVwANOjb6cAqqqTMrIhcVE1lXcA9LQIXQU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURVxUUlVDSyA0MDF8RlVFTCBTQ09SRQ/plot'

    let username = 'osiproghack\hackuser066';
    let password = 'h3ektweiF6%';

    let headers = new Headers();
    //    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.append('Authorization', 'Basic b3NpcHJvZ2hhY2tcaGFja3VzZXIwNjY6aDNla3R3ZWlGNiU=');

    //    return this.http.get(this.piWebApiURL + this.cdt158PlotData, {headers: headers});
    return this.http.get(testCall, {headers: headers});
}

getTruckData(truckId): Observable<any> {
//    https://localhost/piwebapi/elements?path=\\EME\Power\Atlanta%20Data%20Center\Server%20Rack1\ION%206200%20Power%20Meter1
    
    //get all truck elements
//    let testCall = this.piWebApiURL + '/assetdatabases/D0Z2p7MdUQTUCtLlKDN7d5QASpte1UIgn0yHVA-5sdeG3AU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURQ/elements'

    let testCall = this.piWebApiURL + "/elements?path=" + 
    "\\\\SATURN057\\Barrick Haul Trucks Site\\Truck " + truckId ;  

    let username = 'osiproghack\hackuser066';
    let password = 'h3ektweiF6%';

    let headers = new Headers();
    headers.append('Authorization', 'Basic b3NpcHJvZ2hhY2tcaGFja3VzZXIwNjY6aDNla3R3ZWlGNiU=');

    return this.http.get(testCall, {headers: headers});
}
getTrucks(): Observable<any> {
//    https://localhost/piwebapi/elements?path=\\EME\Power\Atlanta%20Data%20Center\Server%20Rack1\ION%206200%20Power%20Meter1
    
    //get all truck elements
    let testCall = this.piWebApiURL + '/assetdatabases/D0Z2p7MdUQTUCtLlKDN7d5QASpte1UIgn0yHVA-5sdeG3AU0FUVVJOMDU3XEJBUlJJQ0sgSEFVTCBUUlVDS1MgU0lURQ/elements'


    let username = 'osiproghack\hackuser066';
    let password = 'h3ektweiF6%';

    let headers = new Headers();
    headers.append('Authorization', 'Basic b3NpcHJvZ2hhY2tcaGFja3VzZXIwNjY6aDNla3R3ZWlGNiU=');

    return this.http.get(testCall, {headers: headers});
}
}



