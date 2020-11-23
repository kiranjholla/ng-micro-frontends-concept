import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MicroAppConfigUrl } from './constants/micro-app-config.tokens';
import { MicroAppConfigService } from './services/micro-app-config.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule]
})
export class MicroAppConfigModule {
  static configureMicroApps(configUrl: string): ModuleWithProviders<MicroAppConfigModule> {
    return {
      ngModule: MicroAppConfigModule,
      providers: [{ provide: MicroAppConfigUrl, useValue: configUrl }, MicroAppConfigService]
    };
  }
}
