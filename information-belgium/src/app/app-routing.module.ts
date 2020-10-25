import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthenticatedLayoutComponent} from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import {AreaTilesGridComponent, InfoAreaComponent} from './containers';


const routes: Routes = [
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        component: AreaTilesGridComponent,
      },
      {
        path: ':sectionId',
        children: [
          {
            path: '',
            component: InfoAreaComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
