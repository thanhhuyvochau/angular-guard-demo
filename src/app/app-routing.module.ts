import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketWithResolveGuardComponent } from './market-with-resolve-guard/market-with-resolve-guard.component';
import { MarketNoResolveGuardComponent } from './market-no-resolve-guard/market-no-resolve-guard.component';
import { CheckInGuard } from './guards/check-in.guard';
import { ItemResolverService } from './guards/item-resolver.service';
import { CheckOutGuard } from './guards/check-out.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'market-resolve', component: MarketWithResolveGuardComponent, canActivate: [CheckInGuard], resolve: {items: ItemResolverService}, canDeactivate: [CheckOutGuard] },
  { path: 'market-no-resolve', component: MarketNoResolveGuardComponent, canActivate: [CheckInGuard], canDeactivate: [CheckOutGuard] },
  { path: 'supermarket', loadChildren: () => import('./supermarket/supermarket.module').then(m => m.SupermarketModule), canLoad: [AuthGuard] },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
