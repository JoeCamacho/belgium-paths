import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthenticatedLayoutComponent} from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import {
  LandingPageComponent,
  SectorListComponent,
  SectorsTilesGridComponent
} from './containers';


const routes: Routes = [
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: LandingPageComponent,
      // },
      {
        path: '',
        component: SectorsTilesGridComponent,
      },
      {
        path: ':sectorId',
        children: [
          {
            path: '',
            component: SectorListComponent,
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
