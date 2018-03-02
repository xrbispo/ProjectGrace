import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VcenterService {

  private AllvCentersJsonUrl = '../assets/data/vcenters.json'


  constructor(private http: HttpClient) { }


  getAllvCenters() {
    return this.http.get(this.AllvCentersJsonUrl)
  }

}
