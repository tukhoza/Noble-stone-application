import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { todo, TODOS } from 'src/app/common/interfaces/app.interfaces';
import { HttpclientService } from 'src/app/common/services/httpclient.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent {

  todos:any = [];

  constructor(public dialog: MatDialog, private httpclientService: HttpclientService, private spinner: SpinnerService,) {
    this.fetchTasks();

  }

  openDialog(task?:any) {
    const dialogRef = this.dialog.open(AddTaskComponent,{
      width:"1000px",
      data: task ? task : null
    }).afterClosed().subscribe({next:(usr)=>{
      this.saveTask(usr);
    }})
  }

  markDone(task:any){

    task.done = !task.done;
    this.httpclientService.postRequest<any>("/api/todos/savetodo",task).subscribe({
      next:(res:any)=>{
        this.fetchTasks();
      },
      error:(err) => {
        console.log("User register error : ", err);
      },
    })
  }

  fetchTasks(){
    this.spinner.showSpinner()
    this.httpclientService.getRequest("/api/todos/getalltodos").subscribe({
      next:(res:any)=>{
        this.todos = res
        this.spinner.hideSpinner()
      },
      error:(err) => {
        console.log("todos fetch error : ", err);
        this.spinner.hideSpinner()
      },
    })
  }

  saveTask(task:any){
    this.spinner.showSpinner()
    console.log("todoDescription ", task)
    this.httpclientService.postRequest<any>("/api/todos/savetodo",task).subscribe({
      next:(res:any)=>{
        this.spinner.hideSpinner();
        this.fetchTasks();
      },
      error:(err) => {
        console.log("User register error : ", err);
        this.spinner.hideSpinner()
      },
    })
  }


  deletetask(){
    console
  }

  removeUserFromList(todo: todo){

    this.spinner.showSpinner()
    console.log("todoDescription ", todo)
    this.httpclientService.postRequest<any>("/api/todos/removeTodo",todo).subscribe({
      next:(res:any)=>{
        this.spinner.hideSpinner();
        const index = this.todos.indexOf(todo, 0);
        if (index > -1) {
          this.todos.splice(index, 1);
        }
      },
      error:(err) => {
        console.log("User register error : ", err);
        this.spinner.hideSpinner()
      },
    })
    
  }
}
