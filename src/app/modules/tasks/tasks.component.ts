import { TaskService } from '../../services/task.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/modules/tasks/task';
import { FormControl } from '@angular/forms';
import { faHouseChimney ,faPenToSquare,faAnglesRight } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  //font awesome icons
  faHouseChimney = faHouseChimney;
  faPenToSquare = faPenToSquare;
  faAnglesRight = faAnglesRight;
  //properties
  @Output() taskToEdit!:Task;

  private taskList:Task[] = [];
  // controlTitle:FormControl = new FormControl('');
  showTaskEditor:boolean = false;


  constructor(private taskService:TaskService) {
  }

  ngOnInit(): void {
     this.taskService.getTasks().subscribe( tasks => { this.taskList = tasks  } );
  }
  closeTaskEditor(show:boolean) {
    this.showTaskEditor = show;
  }

  toggleTaskEditor() {
    this.showTaskEditor = !this.showTaskEditor;
  }

  getTasks() {
    return this.taskList;
  }


  /**
   * intercept onTaskStored event and update taskList array
   * @param task
   */
  addTask(task:Task) {
    this.taskService.addTask(task).subscribe( task => { this.taskList.push(task) });
  }

  /**
   * intercept onDeleteTask event, check task id ,
   * delete task(backend) and remove it from taskList array
   * @param task
   */
  deleteTask(task:Task) {
    const id:number | undefined = task.id;
    this.taskService.deleteTask(task).subscribe(deleted => {
      if(deleted && id){
        this.taskList = this.taskList.filter(item => item.id != id);
      }
    });
  }

  /**
   *
   * intercept onCompleteTask event and update task on tasksList array
   * @param task
   */
  completeTask(task:Task) {
    this.taskService.updateTask(task).subscribe();
  }

  /**
   * intercept on EditTask event,open editor and pass task data
   */
  openTaskEditor(task:Task) {
    this.taskToEdit = task;
    this.showTaskEditor = true;
    //console.log(this.taskToEdit);

  }
}
