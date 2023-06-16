import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpipeComponent } from './testpipe.component';

describe('TestpipeComponent', () => {
  let component: TestpipeComponent;
  let fixture: ComponentFixture<TestpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestpipeComponent]
    });
    fixture = TestBed.createComponent(TestpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
