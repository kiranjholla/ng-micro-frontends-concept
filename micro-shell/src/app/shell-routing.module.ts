import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorContainer } from './containers/error/error.container';
import { HomeContainer } from './containers/home/home.container';
import { PageNotFoundContainer } from './containers/page-not-found/page-not-found.container';

export const HOME_ROUTES: Routes = [{ path: '', component: HomeContainer }];

export const ERROR_ROUTES: Routes = [
  { path: 'error', component: ErrorContainer },
  { path: '**', component: PageNotFoundContainer }
];

@NgModule({
  imports: [RouterModule.forRoot([...HOME_ROUTES, ...ERROR_ROUTES], { useHash: true })],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
