import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponentDemo2Component } from './standalone-component-demo2.component';

describe('StandaloneComponentDemo2Component', () => {
  let component: StandaloneComponentDemo2Component;
  let fixture: ComponentFixture<StandaloneComponentDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandaloneComponentDemo2Component]
    });
    fixture = TestBed.createComponent(StandaloneComponentDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
