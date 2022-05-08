import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Task } from '../Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl:string = 'http://127.0.0.1:8000/api'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl+'/task/index');
  }
}
