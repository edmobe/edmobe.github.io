import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeMapComponent } from './ce-map.component';

describe('CeMapComponent', () => {
  let component: CeMapComponent;
  let fixture: ComponentFixture<CeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
