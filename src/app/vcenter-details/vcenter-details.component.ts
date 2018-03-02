import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VcentersComponent } from '../vcenters/vcenters.component';

@Component({
  selector: 'app-vcenter-details',
  templateUrl: './vcenter-details.component.html',
  styleUrls: ['./vcenter-details.component.css']
})
export class VcenterDetailsComponent implements OnInit {


  constructor(private VcentersComponent: VcentersComponent, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

}
