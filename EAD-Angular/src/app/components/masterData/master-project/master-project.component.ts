import { Component } from '@angular/core';

@Component({
  selector: 'app-master-project',
  templateUrl: './master-project.component.html',
  styleUrl: './master-project.component.scss'
})
export class MasterProjectComponent {
  title: string = "Master";
  projectName: string = "Project";
}
