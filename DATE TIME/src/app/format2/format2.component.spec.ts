import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Format2Component } from './format2.component';

describe('Format2Component', () => {
  let component: Format2Component;
  let fixture: ComponentFixture<Format2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Format2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Format2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
