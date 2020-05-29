import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsSpaceComponent } from './childs-space.component';

describe('ChildsSpaceComponent', () => {
  let component: ChildsSpaceComponent;
  let fixture: ComponentFixture<ChildsSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildsSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
