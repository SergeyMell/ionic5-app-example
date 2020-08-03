import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthSecondChildPage } from './auth-second-child.page';

const routes: Routes = [
  {
    path: '',
    component: AuthSecondChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthSecondChildPageRoutingModule {}
