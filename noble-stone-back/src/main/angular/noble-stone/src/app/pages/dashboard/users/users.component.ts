import { Component, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerService } from 'src/app/common/components/spinner/spinner.service';
import { user, USERS } from 'src/app/common/interfaces/app.interfaces';
import { HttpclientService } from 'src/app/common/services/httpclient.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users:user[] = []

  constructor(public dialog: MatDialog, private httpclientService: HttpclientService,
    private spinner: SpinnerService,
  ) {
    this.fetchUsers()
  }

  openDialog(user?:any) {
    const dialogRef = this.dialog.open(AddUserComponent,{
      width:"1000px",
      data: user ? user : null
    }).afterClosed().subscribe({next:(usr)=>{
      this.saveUser(usr);
    }})
  }

  fetchUsers(){
    this.spinner.showSpinner()
    this.httpclientService.getRequest("/api/auth/users").subscribe({
      next:(res:any)=>{
        this.users = res;
        this.spinner.hideSpinner()
      },
      error:(err) => {
        console.log("User fetch error : ", err);
        this.spinner.hideSpinner()
      },
    })
  }

  saveUser(user:any){
    this.spinner.showSpinner()
    this.httpclientService.postRequest<any>("/api/auth/register",user).subscribe({
      next:(res:any)=>{
        this.spinner.hideSpinner();
        this.fetchUsers();
      },
      error:(err) => {
        console.log("User register error : ", err);
        this.spinner.hideSpinner()
      },
    })
  }

  editUser(element:any){
    this.openDialog(element)
    console.log("The edit user : ", element);
  }

  deleteUser(user: any){
    this.httpclientService.postRequest("/api/auth/removeuser",user).subscribe({next:()=>{
      this.removeUserFromList(user);
    }});
    
  }

  removeUserFromList(user: user){
    
    const index = this.users.indexOf(user, 0);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }


  

}
