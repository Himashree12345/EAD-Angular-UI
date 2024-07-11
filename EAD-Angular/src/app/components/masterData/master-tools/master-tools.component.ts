import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-tools',
  templateUrl: './master-tools.component.html',
  styleUrl: './master-tools.component.scss'
})
export class MasterToolsComponent {
  title: string = "Master";
  projectName: string = "Tools";

  constructor(private route: Router){}

  NavigateToToolsProject(){
    this.route.navigate(['master/tool-project-mapping']); 
  }
}
