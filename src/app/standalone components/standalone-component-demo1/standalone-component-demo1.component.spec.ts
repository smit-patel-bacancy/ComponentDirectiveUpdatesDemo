import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponentDemo1Component } from './standalone-component-demo1.component';

describe('StandaloneComponentDemo1Component', () => {
  let component: StandaloneComponentDemo1Component;
  let fixture: ComponentFixture<StandaloneComponentDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandaloneComponentDemo1Component]
    });
    fixture = TestBed.createComponent(StandaloneComponentDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
