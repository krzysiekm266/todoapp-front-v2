import { Component, OnInit, EventEmitter, Output, Input ,DoCheck} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Task } from "../../task";
import { TaskValidators } from "./task-editor-validators";
import { faRectangleXmark} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {
  //icons
  faRectangleXmark = faRectangleXmark;
  //properties
  @Input() task!:Task;
  @Output() private onAddTask = new EventEmitter<Task>();
  @Output() private onCloseTaskEditor = new EventEmitter<boolean>();

  taskForm!: FormGroup ;
  titleErrors:ValidationErrors = {};


  constructor(private fb:FormBuilder) {

  }

  private setErrors() {
    this.titleErrors = this.taskForm.get('title')?.errors as ValidationErrors;
  }
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title:['',[Validators.required,TaskValidators.min(3,'Title is to short!')] ] ,
    });

    this.setErrors();

  }




  closeTaskEditor() {
    this.taskForm.get('title')?.setValue('');
    this.setErrors();
    return this.onCloseTaskEditor.emit(false);
  }

  onInputChange() {
    this.setErrors();

  }

  addTask() {
    if(!this.taskForm.valid) {

      return;
    }

    const task:Task = {
      title: this.taskForm.get('title')?.value,
      completed:false,
      created_at:new Date(),
    }
    this.taskForm.get('title')?.setValue('');
    this.setErrors();
    return this.onAddTask.emit(task);
  }


}


