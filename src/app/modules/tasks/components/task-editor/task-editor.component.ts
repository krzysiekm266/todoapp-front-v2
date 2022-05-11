import { TaskService } from './../../../../services/task.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from "../../task";
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {

  @Output() private onAddTask = new EventEmitter<Task>();
  controlTitle:FormControl = new FormControl('');

  constructor(private taskService:TaskService) {
  }

  ngOnInit(): void {
  }

  addTask() {
    const task:Task = {
      title: this.controlTitle.value,
      completed:false,
      created_at:new Date(),
    }

    return this.onAddTask.emit(task);
  }
}
