import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerDarkComponent } from './spacer-dark.component';

describe('SpacerDarkComponent', () => {
  let component: SpacerDarkComponent;
  let fixture: ComponentFixture<SpacerDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacerDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
