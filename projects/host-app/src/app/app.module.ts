import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeCompArr } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { parentReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    routeCompArr
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({'parent':parentReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
