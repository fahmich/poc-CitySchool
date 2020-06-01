import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MereComponent } from './mere.component';

describe('MereComponent', () => {
  let component: MereComponent;
  let fixture: ComponentFixture<MereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
