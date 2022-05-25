import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { Task } from '../task';
=======
import { Task } from '../modules/tasks/task';
>>>>>>> e8c0897abab3dc84aaf8f3ad6c50a0dabc1e9691
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl:string = 'http://127.0.0.1:8000/api/task'

  constructor(private http:HttpClient) {

   }

  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl+'/index');;
  }

  addTask(task:Task):Observable<Task> {
    return this.http.post<Task>(this.taskUrl+'/store',task);
  }

  deleteTask(task:Task):Observable<Task> {
    return this.http.delete<Task>(this.taskUrl+'/delete/'+task.id);
  }

  updateTask(task:Task): Observable<Task> {
    return this.http.put<Task>(this.taskUrl+'/update/'+task.id,task);
  }


}
