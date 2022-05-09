import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';

import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';



@NgModule({
  declarations: [
    TasksComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,

  ]
})
export class TasksModule { }
