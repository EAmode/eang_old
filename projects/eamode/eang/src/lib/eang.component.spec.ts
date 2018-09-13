import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EangComponent } from './eang.component';

describe('EangComponent', () => {
  let component: EangComponent;
  let fixture: ComponentFixture<EangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
