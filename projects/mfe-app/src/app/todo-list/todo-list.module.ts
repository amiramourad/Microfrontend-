import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../state/app.reducer';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      }
    ]),
    // StoreModule.forFeature('products', productReducer)
  ]
})
export class TodoListModule { }
