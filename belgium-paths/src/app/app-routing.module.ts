import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NonAuthenticatedLayoutComponent} from './layouts';
import {
  AboutPageComponent,
  CategoriesTilesGridComponent,
  CategoryListComponent,
  LandingPageComponent,
} from './containers';
import {CategoriesLayoutComponent} from './layouts';


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
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'categories',
        component: CategoriesLayoutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: CategoriesTilesGridComponent,
          },
          {
            path: ':categoryId',
            children: [
              {
                path: '',
                component: CategoryListComponent,
              }
            ]
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
