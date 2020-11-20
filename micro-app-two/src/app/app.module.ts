import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyContainer } from './containers/empty/empty.container';
import { HomeContainer } from './containers/home/home.container';
import { LandingContainer } from './containers/landing/landing.container';
import { AnimalModule } from './modules/animal/animal.module';
import { PlantModule } from './modules/plant/plant.module';

@NgModule({
  declarations: [AppComponent, EmptyContainer, LandingContainer, HomeContainer],
  imports: [BrowserModule, AppRoutingModule, PlantModule, AnimalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
