import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopLeftComponent } from './home-top-left.component';

describe('HomeTopLeftComponent', () => {
  let component: HomeTopLeftComponent;
  let fixture: ComponentFixture<HomeTopLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
