import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
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
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    if (!environment.production) {
      appRef.bootstrap(AppComponent);
    } else {
      console.log('Checking 2: ', customElements.get('micro-app-two'));
      if (!customElements.get('micro-app-two')) {
        const appWebComponent = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('micro-app-two', appWebComponent);
      }
    }
  }
}
