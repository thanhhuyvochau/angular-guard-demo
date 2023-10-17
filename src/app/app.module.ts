import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MarketNoResolveGuardComponent } from './market-no-resolve-guard/market-no-resolve-guard.component';
import { MarketWithResolveGuardComponent } from './market-with-resolve-guard/market-with-resolve-guard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketNoResolveGuardComponent,
    MarketWithResolveGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
