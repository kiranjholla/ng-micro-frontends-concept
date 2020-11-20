import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MarvelUniverseContainer } from './containers/marvel-universe/marvel-universe.container';

@NgModule({
  declarations: [MarvelUniverseContainer],
  imports: [CommonModule]
})
export class MarvelModule {}
