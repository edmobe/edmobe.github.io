import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveStartComponent } from './wave-start.component';

describe('WaveStartComponent', () => {
  let component: WaveStartComponent;
  let fixture: ComponentFixture<WaveStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
