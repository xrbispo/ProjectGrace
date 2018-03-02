import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VcentersComponent } from './vcenters/vcenters.component';
import { VcenterDetailsComponent } from './vcenter-details/vcenter-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/vcenters', pathMatch: 'full' },
  { path: 'vcenters', component: VcentersComponent},
  { path: 'vcenters/:name', component: VcenterDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}