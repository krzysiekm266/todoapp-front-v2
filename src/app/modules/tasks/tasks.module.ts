import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { TaskErrorComponent } from './components/task-error/task-error.component';




@NgModule({
  declarations: [
    TasksComponent,
    TaskItemComponent,
    TaskEditorComponent,
    TaskErrorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    TasksRoutingModule,

  ]
})
export class TasksModule { }
