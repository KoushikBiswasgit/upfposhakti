import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FpoGuidelineComponent } from './fpo-guideline.component';

const routes: Routes = [{ path: '', component: FpoGuidelineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FpoGuidelineRoutingModule { }
