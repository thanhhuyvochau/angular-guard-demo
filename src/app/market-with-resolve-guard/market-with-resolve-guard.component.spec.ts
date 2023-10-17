import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketWithResolveGuardComponent } from './market-with-resolve-guard.component';

describe('MarketWithResolveGuardComponent', () => {
  let component: MarketWithResolveGuardComponent;
  let fixture: ComponentFixture<MarketWithResolveGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketWithResolveGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketWithResolveGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
