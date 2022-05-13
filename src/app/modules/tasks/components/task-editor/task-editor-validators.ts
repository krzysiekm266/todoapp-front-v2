import { AbstractControl,ValidationErrors,ValidatorFn} from "@angular/forms";

export class TaskValidators {
  static min(min:number,msg:string) : ValidatorFn {
   return (control:AbstractControl ): ValidationErrors | null => {
     const error:boolean = (control.value as string).length < min;
     return error ? {toShort:{ valueToLow:true, message:' Min('+min+') characters! '+msg }} : null;
   }
 }
}


