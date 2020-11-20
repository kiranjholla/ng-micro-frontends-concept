import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DCModule } from './modules/dc/dc.module';
import { MarvelModule } from './modules/marvel/marvel.module';
import { EmptyContainer } from './containers/empty/empty.container';
import { LandingContainer } from './containers/landing/landing.container';
import { HomeContainer } from './containers/home/home.container';

@NgModule({
  declarations: [AppComponent, EmptyContainer, LandingContainer, HomeContainer],
  imports: [BrowserModule, AppRoutingModule, DCModule, MarvelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
