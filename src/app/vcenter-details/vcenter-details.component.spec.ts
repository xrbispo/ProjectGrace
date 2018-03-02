import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcenterDetailsComponent } from './vcenter-details.component';

describe('VcenterDetailsComponent', () => {
  let component: VcenterDetailsComponent;
  let fixture: ComponentFixture<VcenterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcenterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
