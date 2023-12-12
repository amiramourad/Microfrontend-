import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component.component';



@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponentComponent
      }
    ])
  ]
})
export class TestModule { }
