import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmersCornerComponent } from './farmers-corner.component';

const routes: Routes = [{ path: '', component: FarmersCornerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersCornerRoutingModule { }
