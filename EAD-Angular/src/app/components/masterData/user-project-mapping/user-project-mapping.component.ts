import { Component } from '@angular/core';

@Component({
  selector: 'app-user-project-mapping',
  templateUrl: './user-project-mapping.component.html',
  styleUrl: './user-project-mapping.component.scss'
})
export class UserProjectMappingComponent {
  title: string = "Master";
  projectName: string = "Users ";
  subheading: string = "/ User & Project Mapping";
}
