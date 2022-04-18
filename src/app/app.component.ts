import { Component } from '@angular/core';
import { faCircleLeft, faCircleRight, faCoffee, faFloppyDisk, faSave, faSquareCaretRight, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todov3';
  save = faFloppyDisk;
  trashcan = faTrash;
  next = faCircleRight;
  prev = faCircleLeft;

  todoTasks: string[] = [];
  todoNewTask: string = '';

  inprogressTasks: string[] = [];
  inprogressNewTask: string = '';

  doneTasks: string[] = [];
  doneNewTask: string = '';

  addTodoTask(){
    this.todoTasks.push(this.todoNewTask);
    this.todoNewTask = '';
  }

  moveTodoTask(index: number){
    this.inprogressNewTask = this.todoTasks[index];
    this.todoTasks.splice(index,1);
    this.inprogressTasks.push(this.inprogressNewTask);
  }

  moveInProgress(index: number){
    this.inprogressNewTask = this.doneTasks[index];
    this.inprogressTasks.push(this.inprogressNewTask);
    this.doneTasks.splice(index,1);
  }

  deleteTask(index: number){
    this.doneTasks.splice(index,1);
  }

  deleteTaskInProgress(index: number){
    this.inprogressTasks.splice(index,1);
  }

  deleteTaskToDo(index: number){
    this.todoTasks.splice(index,1);
  }

  moveTodo(index: number){
    this.todoNewTask = this.inprogressTasks[index];
    this.todoTasks.push(this.todoNewTask);
    this.inprogressTasks.splice(index,1);
  }

  moveDone(index: number){
    this.doneNewTask = this.inprogressTasks[index];
    this.doneTasks.push(this.doneNewTask);
    this.inprogressTasks.splice(index,1);
  }




}
