import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Format3Component } from './format3.component';

describe('Format3Component', () => {
  let component: Format3Component;
  let fixture: ComponentFixture<Format3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Format3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Format3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
