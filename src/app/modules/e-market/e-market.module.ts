import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EMarketRoutingModule } from './e-market-routing.module';
import { EMarketComponent } from './e-market.component';


@NgModule({
  declarations: [
    EMarketComponent
  ],
  imports: [
    CommonModule,
    EMarketRoutingModule
  ]
})
export class EMarketModule { }
