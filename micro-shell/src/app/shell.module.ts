import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellContainer } from './containers/shell/shell.container';
import { EmptyContainer } from './containers/empty/empty.container';
import { HomeContainer } from './containers/home/home.container';
import { ErrorContainer } from './containers/error/error.container';
import { PageNotFoundContainer } from './containers/page-not-found/page-not-found.container';

@NgModule({
  declarations: [ShellContainer, HomeContainer, EmptyContainer, ErrorContainer, PageNotFoundContainer],
  imports: [BrowserModule, ShellRoutingModule],
  bootstrap: [ShellContainer]
})
export class ShellModule {}
