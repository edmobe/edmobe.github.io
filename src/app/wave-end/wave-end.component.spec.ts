import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveEndComponent } from './wave-end.component';

describe('WaveEndComponent', () => {
  let component: WaveEndComponent;
  let fixture: ComponentFixture<WaveEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
