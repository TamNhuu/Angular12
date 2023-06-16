import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingdataPCComponent } from './passingdata-pc.component';

describe('PassingdataPCComponent', () => {
  let component: PassingdataPCComponent;
  let fixture: ComponentFixture<PassingdataPCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassingdataPCComponent]
    });
    fixture = TestBed.createComponent(PassingdataPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
