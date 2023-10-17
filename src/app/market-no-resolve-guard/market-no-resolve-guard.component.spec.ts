import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketNoResolveGuardComponent } from './market-no-resolve-guard.component';

describe('MarketNoResolveGuardComponent', () => {
  let component: MarketNoResolveGuardComponent;
  let fixture: ComponentFixture<MarketNoResolveGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketNoResolveGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketNoResolveGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
