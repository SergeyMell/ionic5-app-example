import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthPage} from './auth.page';
import {AuthFirstChildPage} from './auth-first-child/auth-first-child.page';
import {AuthSecondChildPage} from './auth-second-child/auth-second-child.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'auth-first-child',
    component: AuthFirstChildPage
  },
  {
    path: 'auth-second-child',
    component: AuthSecondChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
