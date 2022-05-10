import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskList:Task[] = [];
  controlTitle:FormControl = new FormControl('');
  constructor(private taskService:TaskService) {

  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe( (tasks) =>{ this.taskList = tasks  });
  }

  // addTask() {
  //   const task:Task = {
  //     title: this.controlTitle.value,
  //     completed:false,
  //     created_at:new Date(),
  //   }
  //   this.taskService.addTask(task).subscribe( (task) => { this.tasks.push(task)});
  // }
  updateTaskList(task:Task) {
    this.taskList.push(task);
  }

  deleteTask(task:Task) {
    const id:number | undefined = task.id;
    this.taskService.deleteTask(task).subscribe(deleted => {
      if(deleted && id){
        this.taskList = this.taskList.filter(item => item.id != id);
      }
    });
  }

  completeTask(task:Task) {
    this.taskService.updateTask(task).subscribe();
  }

}
