import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeappliencesComponent } from './homeappliences.component';

describe('HomeappliencesComponent', () => {
  let component: HomeappliencesComponent;
  let fixture: ComponentFixture<HomeappliencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeappliencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeappliencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
