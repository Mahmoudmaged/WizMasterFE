import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { RefreshComponent } from './component/refresh/refresh.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'refresh', component: RefreshComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
