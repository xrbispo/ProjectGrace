import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcentersComponent } from './vcenters.component';

describe('VcentersComponent', () => {
  let component: VcentersComponent;
  let fixture: ComponentFixture<VcentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
