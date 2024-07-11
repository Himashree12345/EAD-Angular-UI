import { Component } from '@angular/core';

@Component({
  selector: 'app-master-tool-versions',
  templateUrl: './master-tool-versions.component.html',
  styleUrl: './master-tool-versions.component.scss'
})
export class MasterToolVersionsComponent {
  title: string = 'Master';
  projectName: string = 'Tool Versions';
}
