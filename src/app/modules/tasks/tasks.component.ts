import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
   tasks:Task[] = [];
  //  @Input() task:Task = {title:'', completed:false, created_at:new Date()};
  constructor(private taskService:TaskService) {

  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe( (tasks) =>{ this.tasks = tasks  });
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe();
  }

  deleteTask(task:Task) {
    const id:number | undefined = task.id;
    this.taskService.deleteTask(task).subscribe(deleted => {
      if(deleted && id){
        this.tasks = this.tasks.filter(item => item.id != id);
      }
    });
  }

  completeTask(task:Task) {
    this.taskService.updateTask(task).subscribe();
  }

}
