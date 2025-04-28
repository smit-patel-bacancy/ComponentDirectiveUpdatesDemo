import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicComponentDemo2Component } from './classic-component-demo2.component';

describe('ClassicComponentDemo2Component', () => {
  let component: ClassicComponentDemo2Component;
  let fixture: ComponentFixture<ClassicComponentDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicComponentDemo2Component]
    });
    fixture = TestBed.createComponent(ClassicComponentDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
