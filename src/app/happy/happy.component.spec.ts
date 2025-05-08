import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyComponent } from './happy.component';

describe('HappyComponent', () => {
  let component: HappyComponent;
  let fixture: ComponentFixture<HappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HappyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
