import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserdetailsComponent } from './myuserdetails.component';

describe('MyuserdetailsComponent', () => {
  let component: MyuserdetailsComponent;
  let fixture: ComponentFixture<MyuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
