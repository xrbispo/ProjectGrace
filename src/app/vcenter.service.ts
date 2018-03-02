import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VcenterService {

  constructor(private http: HttpClient) { }

  getAllvCenters() {
    let AllvCentersJsonUrl = '../assets/data/vcenters.json'
    return this.http.get(AllvCentersJsonUrl)
  }

  getvCenter(name: string) {
    let vCenterUrl = '../assets/data/' + name + '/RVTools_tabvCluster.json'
    return this.http.get(vCenterUrl)
  }

}
