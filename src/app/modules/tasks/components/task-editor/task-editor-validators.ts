import { AbstractControl,ValidationErrors,ValidatorFn,Validators} from "@angular/forms";

export class TaskValidators {
  static min(min:number,msg:string) : ValidatorFn {
   return (control:AbstractControl ): ValidationErrors | null => {
     const error:boolean = (control.value as string).length < min;
     return error ? {min:{ min:true } }: null;
   }
 }
}

