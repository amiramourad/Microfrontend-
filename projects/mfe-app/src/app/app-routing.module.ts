import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  {
    path: '',   loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  { path: 'test', loadChildren: () => import('./test-component/test.module').then(m => m.TestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
