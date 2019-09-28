import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatingPageComponent } from './navigating-page.component';

describe('NavigatingPageComponent', () => {
  let component: NavigatingPageComponent;
  let fixture: ComponentFixture<NavigatingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
