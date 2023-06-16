import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcustompipeComponent } from './testcustompipe.component';

describe('TestcustompipeComponent', () => {
  let component: TestcustompipeComponent;
  let fixture: ComponentFixture<TestcustompipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestcustompipeComponent]
    });
    fixture = TestBed.createComponent(TestcustompipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
