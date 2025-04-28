import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicComponentDemo1Component } from './classic-component-demo1.component';

describe('ClassicComponentDemo1Component', () => {
  let component: ClassicComponentDemo1Component;
  let fixture: ComponentFixture<ClassicComponentDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicComponentDemo1Component]
    });
    fixture = TestBed.createComponent(ClassicComponentDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
