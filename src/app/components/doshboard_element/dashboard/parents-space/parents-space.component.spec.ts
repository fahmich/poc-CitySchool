import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsSpaceComponent } from './parents-space.component';

describe('ParentsSpaceComponent', () => {
  let component: ParentsSpaceComponent;
  let fixture: ComponentFixture<ParentsSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
