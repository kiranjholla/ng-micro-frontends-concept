import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { MicroAppConfigUrl } from '../constants/micro-app-config.tokens';

export const microAppInitializerFactory = (configService: MicroAppConfigService) => () => configService.loadMicroAppConfig();

@Injectable()
export class MicroAppConfigService {
  private microAppConfig: { [key: string]: any };

  constructor(private readonly http: HttpClient, @Inject(MicroAppConfigUrl) @Optional() private readonly configUrl: string) {}

  loadMicroAppConfig(): Promise<any> {
    if (this.configUrl) {
      return new Promise(complete =>
        this.http.get(this.configUrl).subscribe({
          next: config => (this.microAppConfig = config),
          complete,
          error: error => {
            this.microAppConfig = {};
            console.error(error);
            complete();
          }
        })
      );
    } else {
      this.microAppConfig = {};
      return Promise.resolve();
    }
  }

  getMicroAppConfig() {
    return this.microAppConfig;
  }
}
