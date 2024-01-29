import { FoodCatalogueComponentent } from './components/food-catalogue.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatalogueRoutingModule } from './food-catalogue-routing.module';

@NgModule({
  declarations: [FoodCatalogueComponentent],
  imports: [CommonModule, FoodCatalogueRoutingModule],
})
export class FoodCatalogueModule {}
