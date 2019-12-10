import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAngularComponent } from './description-angular.component';

describe('DescriptionAngularComponent', () => {
  let component: DescriptionAngularComponent;
  let fixture: ComponentFixture<DescriptionAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
