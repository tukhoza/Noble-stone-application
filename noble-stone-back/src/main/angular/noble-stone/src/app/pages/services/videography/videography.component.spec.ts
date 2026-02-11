import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideographyComponent } from './videography.component';

describe('VideographyComponent', () => {
  let component: VideographyComponent;
  let fixture: ComponentFixture<VideographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideographyComponent]
    });
    fixture = TestBed.createComponent(VideographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
