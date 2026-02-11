import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHubComponent } from './gallery-hub.component';

describe('GalleryHubComponent', () => {
  let component: GalleryHubComponent;
  let fixture: ComponentFixture<GalleryHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryHubComponent]
    });
    fixture = TestBed.createComponent(GalleryHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
