import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getShowProductCode } from '../state/app.reducer';
import * as ProductActions from '../state/app.actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
displayCode: boolean = false;
constructor(private store: Store<State>){

}

ngOnInit(): void {
    // TODO: Unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
}

checkChanged(): void {
  this.store.dispatch(ProductActions.toggleProductCode());
}
}

