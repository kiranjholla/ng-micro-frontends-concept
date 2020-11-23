import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyContainer } from './containers/empty/empty.container';
import { HomeContainer } from './containers/home/home.container';
import { LandingContainer } from './containers/landing/landing.container';
import { DCModule } from './modules/dc/dc.module';
import { MarvelModule } from './modules/marvel/marvel.module';

@NgModule({
  declarations: [AppComponent, EmptyContainer, LandingContainer, HomeContainer],
  imports: [BrowserModule, AppRoutingModule, DCModule, MarvelModule],
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
      console.log('Checking 1: ', customElements.get('micro-app-one'));
      if (!customElements.get('micro-app-one')) {
        const appWebComponent = createCustomElement(AppComponent, { injector: this.injector });
        customElements.define('micro-app-one', appWebComponent);
      }
    }
  }
}
