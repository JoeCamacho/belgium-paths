import {CategoriesLayoutComponent} from './categories-layout/categories-layout.component';
import {NonAuthenticatedLayoutComponent} from './non-authenticated-layout/non-authenticated-layout.component';

export * from './categories-layout/categories-layout.component';
export * from './non-authenticated-layout/non-authenticated-layout.component';

export const Layouts = [
  NonAuthenticatedLayoutComponent,
  CategoriesLayoutComponent,
];
