import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyQuoteComponent } from './empty-quote.component';

describe('EmptyQuoteComponent', () => {
  let component: EmptyQuoteComponent;
  let fixture: ComponentFixture<EmptyQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyQuoteComponent]
    });
    fixture = TestBed.createComponent(EmptyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
