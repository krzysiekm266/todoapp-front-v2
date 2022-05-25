import { Component, OnInit,Input } from '@angular/core';
import { faCircleCheck,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-error',
  templateUrl: './task-error.component.html',
  styleUrls: ['./task-error.component.scss']
})
export class TaskErrorComponent implements OnInit {
  //icons
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  //properties
  @Input() error:boolean = true;
  @Input() msg:string = '';
  //
  constructor() { }

  ngOnInit(): void {
  }

}
