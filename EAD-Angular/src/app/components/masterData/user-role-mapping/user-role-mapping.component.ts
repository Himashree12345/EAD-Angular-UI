import { Component } from '@angular/core';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrl: './user-role-mapping.component.scss'
})
export class UserRoleMappingComponent {
  title: string = "Master";
  projectName: string = "Users ";
  subheading: string = "/ User & Role Mapping";
}
