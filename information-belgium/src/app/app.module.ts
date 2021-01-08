import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import {Components} from './components';
import {Containers} from './containers';
import {Layouts} from './layouts';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {LocationStrategy} from '@angular/common';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

export function createTranslateLoader(http: HttpClient, locationStrategy: LocationStrategy) {
  const href = locationStrategy.getBaseHref() !== '/' ? locationStrategy.getBaseHref() : '';
  return new MultiTranslateHttpLoader(http, [
    {prefix: `${href}/assets/i18n/app/`, suffix: '.json'},
  ]);
}

const MaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, LocationStrategy],
      },
      isolate: true,
    }),

    ...MaterialModules,
  ],
  declarations: [
    AppComponent,
    ...Components,
    ...Containers,
    ...Layouts,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
