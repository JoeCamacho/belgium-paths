import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthenticatedLayoutComponent} from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import {InfoAreaComponent, LandingPageComponent, SectorsTilesGridComponent} from './containers';


const routes: Routes = [
  {
    path: '',
    component: NonAuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'sectors',
        component: SectorsTilesGridComponent,
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
