import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-users',
  templateUrl: './master-users.component.html',
  styleUrl: './master-users.component.scss'
})
export class MasterUsersComponent {
  title: string = "Master";
  projectName: string = "Users";

  constructor(private route: Router){}

  NavigateToUserProject(){
    this.route.navigate(['master/user-project-mapping']); 
  }
  NavigateToUserRole(){
    this.route.navigate(['master/user-role-mapping']);
  }
}
