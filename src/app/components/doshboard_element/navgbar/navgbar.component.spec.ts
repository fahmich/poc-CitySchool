import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgbarComponent } from './navgbar.component';

describe('NavgbarComponent', () => {
  let component: NavgbarComponent;
  let fixture: ComponentFixture<NavgbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
