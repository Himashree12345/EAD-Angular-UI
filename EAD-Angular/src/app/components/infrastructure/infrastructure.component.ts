import { Component, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CloudService } from '../../services/cloud.service';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {

  projects : any = [
    {
      projectId : 1,
      projectName : 'ABC',
      projectContent : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia in illo. Soluta possimus quis dicta..'
    },
    {
      projectId : 2,
      projectName : 'PQR',
      projectContent : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia in illo. Soluta possimus quis dicta..'
    },
    {
      projectId : 3,
      projectName : 'XYZ',
      projectContent : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia in illo. Soluta possimus quis dicta..'
    },
    {
      projectId : 4,
      projectName : 'LMN',
      projectContent : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia in illo. Soluta possimus quis dicta..'
    }
  ];

  projectList : any = [];
  @Input() titleName: String = 'Infrastructure';


  constructor(private projectService : ProjectService, private cloudService : CloudService){

  }

  ngOnInit(){
    this.projectService.getProjectDetails('aaa').subscribe(data=>{
      this.projectList = data;
    })
  }

  setSelectedProject(project){
    this.projectService.selectedProject = project;
    localStorage.setItem('projectDetails',JSON.stringify(project));
    this.cloudService.getCloudCategories();

  }

}
