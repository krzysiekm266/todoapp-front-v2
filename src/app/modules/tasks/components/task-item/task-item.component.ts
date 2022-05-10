
import { TaskService } from '../../../../services/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/task';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  //fontawsome icons
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  faSquareCheck = faSquareCheck;
  //input,output
  @Input() task:Task = {title:'', completed:false, created_at:new Date()};
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onCompleteTask = new EventEmitter<Task>();
  @Output() onEditTask = new EventEmitter<Task>();
  //properties
  status:boolean = false;

  constructor(private taskService:TaskService) {
    //this.status = this.task.completed;
  }

  ngOnInit(): void {
    this.status = this.task.completed;
  }

  deleteTask() {
   return this.onDeleteTask.emit(this.task);
  }

  completeTask() {

    this.task.completed = true;
    this.task.completed_at = new Date();
    this.status = this.task.completed;
    return this.onCompleteTask.emit(this.task);
  }

  editTask() {
    return this.onEditTask.emit(this.task);

  }
}
