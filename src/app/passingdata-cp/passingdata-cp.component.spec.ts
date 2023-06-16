import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingdataCpComponent } from './passingdata-cp.component';

describe('PassingdataCpComponent', () => {
  let component: PassingdataCpComponent;
  let fixture: ComponentFixture<PassingdataCpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassingdataCpComponent]
    });
    fixture = TestBed.createComponent(PassingdataCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
