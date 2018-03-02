import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { AppRoutingModule } from './/app-routing.module';

import { VcenterService } from './vcenter.service';

import { VcentersComponent } from './vcenters/vcenters.component';
import { VcenterDetailsComponent } from './vcenter-details/vcenter-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    VcentersComponent,
    VcenterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [VcenterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
