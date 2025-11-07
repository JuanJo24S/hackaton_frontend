import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtisanPage } from './artisan.page';

describe('ArtisanPage', () => {
  let component: ArtisanPage;
  let fixture: ComponentFixture<ArtisanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
