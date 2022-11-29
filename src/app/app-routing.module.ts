import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => 
    m.HomeModule) },
  { path: 'about-us', 
    loadChildren: () => import('./modules/aboutus/aboutus.module').then(m => 
    m.AboutUsModule) },
  { path: 'faq', loadChildren: () => import('./modules/faq/faq.module').then(m => m.FaqModule) },
  { path: 'fpo-guideline', loadChildren: () => import('./modules/fpo-guideline/fpo-guideline.module').then(m => m.FpoGuidelineModule) },
  { path: 'scheme', loadChildren: () => import('./modules/scheme/scheme.module').then(m => m.SchemeModule) },
  { path: 'gallery', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'e-market', loadChildren: () => import('./modules/e-market/e-market.module').then(m => m.EMarketModule) },
  { path: 'whats-new', loadChildren: () => import('./modules/whats-new/whats-new.module').then(m => m.WhatsNewModule) },
  { path: 'farmers-corner', loadChildren: () => import('./modules/farmers-corner/farmers-corner.module').then(m => m.FarmersCornerModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
