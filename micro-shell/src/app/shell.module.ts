import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmptyContainer } from './containers/empty/empty.container';
import { ErrorContainer } from './containers/error/error.container';
import { HomeContainer } from './containers/home/home.container';
import { PageNotFoundContainer } from './containers/page-not-found/page-not-found.container';
import { ShellContainer } from './containers/shell/shell.container';
import { MicroAppConfigModule } from './modules/micro-app-config/micro-app-config.module';
import { MicroAppConfigService, microAppInitializerFactory } from './modules/micro-app-config/services/micro-app-config.service';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  declarations: [ShellContainer, HomeContainer, EmptyContainer, ErrorContainer, PageNotFoundContainer],
  imports: [BrowserModule, ShellRoutingModule, MicroAppConfigModule.configureMicroApps('configs/micro-app-config.json')],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: microAppInitializerFactory,
      multi: true,
      deps: [MicroAppConfigService]
    }
  ],
  bootstrap: [ShellContainer]
})
export class ShellModule {}
