import { TaskService } from '../../../../services/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
 @Input() task:Task = {title:'', completed:false, created_at:new Date()};
 @Output() onDeleteTask = new EventEmitter<Task>();
 @Output() onCompleteTask = new EventEmitter<Task>();

  status:boolean ;
  constructor(private taskService:TaskService) {
    this.status = this.task.completed;
  }

  ngOnInit(): void {
  }

  deleteTask() {
   return this.onDeleteTask.emit(this.task);
  }

  completeTask() {
    this.task.completed = !this.task.completed;
    return this.onCompleteTask.emit(this.task);
  }
}
