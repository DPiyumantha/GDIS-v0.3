import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopRightComponent } from './home-top-right.component';

describe('HomeTopRightComponent', () => {
  let component: HomeTopRightComponent;
  let fixture: ComponentFixture<HomeTopRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
