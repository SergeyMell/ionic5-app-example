import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {HomeFirstChildComponent} from './home-first-child/home-first-child.component';
import {HomeSecondChildComponent} from './home-second-child/home-second-child.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home-first-child',
        component: HomeFirstChildComponent
      },
      {
        path: 'home-second-child',
        component: HomeSecondChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
