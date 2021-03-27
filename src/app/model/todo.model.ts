export class Todo {
  id?: string;
  task?: string;
  completed?: boolean;
  created?: Date;


  constructor(id?: string,
              task?: string,
              completed?: boolean,
              created?: Date) {
    this.id = id;
    this.task = task;
    this.completed = completed;
    this.created = created;
  }
}
