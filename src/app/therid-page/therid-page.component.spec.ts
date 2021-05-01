import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheridPageComponent } from './therid-page.component';

describe('TheridPageComponent', () => {
  let component: TheridPageComponent;
  let fixture: ComponentFixture<TheridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheridPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
