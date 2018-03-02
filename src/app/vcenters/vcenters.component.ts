import { Component, OnInit } from '@angular/core';

import { VcenterService } from '../vcenter.service';

@Component({
  selector: 'app-vcenters',
  templateUrl: './vcenters.component.html',
  styleUrls: ['./vcenters.component.css']
})

export class VcentersComponent implements OnInit {

  AllvCenters: any = [];

  constructor(private VcenterService: VcenterService) { }

  ngOnInit() {
    this.GetAllvCenters();
  }

  GetAllvCenters() {
    this.VcenterService.getAllvCenters()
      .subscribe(data => { this.AllvCenters = data })
  }
}