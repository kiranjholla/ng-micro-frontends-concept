import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyContainer } from './containers/empty/empty.container';
import { HomeContainer } from './containers/home/home.container';
import { LandingContainer } from './containers/landing/landing.container';
import { AnimalKingdomContainer } from './modules/animal/containers/animal-kingdom/animal-kingdom.container';
import { PlantKingdomContainer } from './modules/plant/containers/plant-kingdom/plant-kingdom.container';

const routes: Routes = [
  {
    path: 'two',
    component: LandingContainer,
    children: [
      { path: '', component: HomeContainer },
      { path: 'plants', component: PlantKingdomContainer },
      { path: 'animals', component: AnimalKingdomContainer }
    ]
  },
  { path: '**', component: EmptyContainer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
