import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  @Output() private onAddTask = new EventEmitter<Task>();
  @Output() private onCloseTaskEditor = new EventEmitter<boolean>();
  errorMsg:string | null = '';
  //title:FormControl = new FormControl('');
  taskForm!: FormGroup ;
  taskErrors:ValidationErrors | null | undefined = {};
  faRectangleXmark = faRectangleXmark;


  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title:['',[Validators.required,TaskValidators.min(3,'Title is to short!')] ],
    });

  }

  closeTaskEditor() {
    return this.onCloseTaskEditor.emit(false);
  }

  onInputChange() {
    this.taskErrors = this.taskForm.get('title')?.errors;
    this.errorMsg = this.taskErrors?.['toShort']?.message;
  }
  addTask() {
    if(!this.taskForm.valid) {
      //this.taskErrors = this.taskForm.get('title')?.errors;
       //this.errorMsg = this.taskErrors?.['badTitle']?.message;
      //this.errorMsg = this.taskForm.errors?.['badTitle'].message;
      console.log(this.taskErrors);

      return;
    }

    const task:Task = {
      title: this.taskForm.get('title')?.value,
      completed:false,
      created_at:new Date(),
    }
    this.taskForm.get('title')?.setValue('');
    this.errorMsg = '';
    return this.onAddTask.emit(task);
  }
}


