import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAboutComponent } from './creat-about.component';

describe('CreatAboutComponent', () => {
  let component: CreatAboutComponent;
  let fixture: ComponentFixture<CreatAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatAboutComponent]
    });
    fixture = TestBed.createComponent(CreatAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
