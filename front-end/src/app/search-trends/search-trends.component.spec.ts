import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrendsComponent } from './search-trends.component';

describe('SearchTrendsComponent', () => {
  let component: SearchTrendsComponent;
  let fixture: ComponentFixture<SearchTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
