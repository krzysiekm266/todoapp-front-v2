export interface Task {
  id?:number;
  title:string;
  completed:boolean;
  created_at:Date;
  updated_at:Date;
  completed_at:Date;
}
