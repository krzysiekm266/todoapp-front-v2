import { TaskService } from './../../../../services/task.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from "../../../../task";
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {
  controlTitle:FormControl = new FormControl('');
  constructor(private taskService:TaskService) { }
  @Output() private onTaskStored = new EventEmitter<Task>();
  ngOnInit(): void {
  }
  addTask() {
    const task:Task = {
      title: this.controlTitle.value,
      completed:false,
      created_at:new Date(),
    }
    this.taskService.addTask(task).subscribe( (task) => { this.onTaskStored.emit(task)});
  }
}
