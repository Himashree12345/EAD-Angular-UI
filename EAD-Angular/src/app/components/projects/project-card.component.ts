import { Component, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { CloudService } from '../../services/cloud.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: any;
  /**
   *
   */
  constructor(private projectService : ProjectService, private cloudService : CloudService) {}
  setSelectedProject(project: any){
    this.projectService.selectedProject = project;
    localStorage.setItem('projectDetails',JSON.stringify(project));
    this.cloudService.getCloudCategories();

  }

}
