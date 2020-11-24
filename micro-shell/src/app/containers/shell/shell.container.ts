import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { MicroAppConfigService } from '../../modules/micro-app-config/services/micro-app-config.service';
import { ERROR_ROUTES, HOME_ROUTES } from '../../shell-routing.module';
import { EmptyContainer } from '../empty/empty.container';

@Component({
  selector: 'shell-root',
  templateUrl: './shell.container.html',
  styleUrls: ['./shell.container.scss']
})
export class ShellContainer implements AfterViewInit {
  @ViewChild('microAppContainer', { static: false }) appContainer: ElementRef;
  microAppLinks: { route: string; name: string }[] = [];

  private readonly microAppConfig;
  private readonly microAppRoutes: Routes = [];
  private readonly loadedScripts: { [key: string]: boolean } = {};

  constructor(microAppConfigService: MicroAppConfigService, private readonly router: Router) {
    this.microAppConfig = microAppConfigService.getMicroAppConfig();
  }

  ngAfterViewInit() {
    const microApps = Object.keys(this.microAppConfig);

    if (microApps.length) {
      if (this.appContainer) {
        microApps.forEach(elementName => {
          this.loadMicroApp(elementName, this.microAppConfig[elementName]);
        });
        this.router.resetConfig([...HOME_ROUTES, ...this.microAppRoutes, ...ERROR_ROUTES]);
      } else {
        console.error('The App Container has not been initialized!');
      }
    }
  }

  private loadMicroApp(microAppElementName: string, microAppConfig: any) {
    const { hostname = '', scripts, styles, loaded, appRoute, appName, webComponentElement = microAppElementName } = microAppConfig;

    if (loaded) {
      return;
    }

    this.microAppLinks.push({ route: `#/${appRoute}`, name: appName });
    this.microAppRoutes.push({ path: `${appRoute}`, component: EmptyContainer });

    scripts?.forEach(path => {
      if (!this.loadedScripts[path]) {
        const scriptTag = document.createElement('script');
        scriptTag.src = `${hostname}${path}`;
        scriptTag.setAttribute('defer', 'defer');
        this.appContainer.nativeElement.appendChild(scriptTag);
        this.loadedScripts[path] = true;
      }
    });

    styles?.forEach(style => {
      if (!this.loadedScripts[style]) {
        const styleTag = document.createElement('link');
        styleTag.href = `${hostname}${style}`;
        styleTag.rel = 'stylesheet';
        document.head.appendChild(styleTag);
        this.loadedScripts[style] = true;
      }
    });

    if (scripts?.length) {
      const domWCElement = document.createElement(webComponentElement);
      this.appContainer.nativeElement.appendChild(domWCElement);
      microAppConfig.loaded = true;
    }
  }
}
