import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { TestModule } from './test-component/test.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    TestModule,
    StoreModule.forFeature('products', productReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      // StoreModule.forFeature('products', productReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
