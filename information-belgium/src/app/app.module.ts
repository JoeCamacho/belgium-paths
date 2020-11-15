import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NonAuthenticatedLayoutComponent} from './layouts/non-authenticated-layout/non-authenticated-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {Containers} from './containers';
import {Components} from './components';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

const MaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCardModule,

];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ...MaterialModules,
  ],
  declarations: [
    AppComponent,
    NonAuthenticatedLayoutComponent,
    ...Components,
    ...Containers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
