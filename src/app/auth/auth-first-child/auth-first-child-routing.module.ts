import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthFirstChildPage } from './auth-first-child.page';

const routes: Routes = [
  {
    path: '',
    component: AuthFirstChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthFirstChildPageRoutingModule {}
