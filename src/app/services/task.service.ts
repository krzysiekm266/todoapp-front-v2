import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Task } from '../task';
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
