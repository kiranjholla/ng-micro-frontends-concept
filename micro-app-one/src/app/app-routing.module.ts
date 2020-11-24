import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyContainer } from './containers/empty/empty.container';
import { HomeContainer } from './containers/home/home.container';
import { LandingContainer } from './containers/landing/landing.container';
import { DcUniverseContainer } from './modules/dc/containers/dc-universe/dc-universe.container';
import { MarvelUniverseContainer } from './modules/marvel/containers/marvel-universe/marvel-universe.container';

const routes: Routes = [
  {
    path: 'one',
    component: LandingContainer,
    children: [
      { path: '', component: HomeContainer },
      { path: 'dc', component: DcUniverseContainer },
      { path: 'marvel', component: MarvelUniverseContainer }
    ]
  },
  { path: '**', component: EmptyContainer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
