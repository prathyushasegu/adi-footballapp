import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesDetailsComponent } from './fixtures-details.component';

describe('FixturesDetailsComponent', () => {
  let component: FixturesDetailsComponent;
  let fixture: ComponentFixture<FixturesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixturesDetailsComponent]
    });
    fixture = TestBed.createComponent(FixturesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
