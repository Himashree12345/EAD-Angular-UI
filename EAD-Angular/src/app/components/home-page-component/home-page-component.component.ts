import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { OpenRequestsService } from '../../services/open-requests.service';
import { error } from 'console';
import { response } from 'express';
import { LocalStorageService } from '../../services/local-storage.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

interface recentProjectsData{
  projectId: number;
  projectName: string;
  projectType: string;
  projectDescription: string;
}

interface openRequestsData{
  projectId: number;
  changeNumber: string;
  projectName: string;
  area: string;
  state: string;
  createdDate: string;
}

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.scss'
})
export class HomePageComponentComponent implements OnInit {
   recentProjectsData: recentProjectsData[] = [
    { projectId:1, projectName: 'Project 1', projectType: 'Type A',projectDescription: 'Project description. Lorem Ipsum dolor sit. Project description. Lorem Ipsum dolor sit. Project description. Lorem Ipsum...' },
    { projectId:2, projectName: 'Project 2', projectType: 'Type B',projectDescription: 'Project description. Lorem Ipsum dolor sit. Project description. Lorem Ipsum dolor sit. Project description. Lorem Ipsum...' },
    { projectId:3, projectName: 'Project 3', projectType: 'Type C',projectDescription: 'Project description. Lorem Ipsum dolor sit. Project description. Lorem Ipsum dolor sit. Project description. Lorem Ipsum...' },
  ];

  /* openRequestsData: openRequestsData[] = [
    { projectID : '#P000127', projectName: 'Project ABC', projectType: 'CI-CD-Plan', projectDate: '02/03/2024', projectDescription: 'Pending for approval'},
    { projectID : '#P000126', projectName: 'Project ABC', projectType: 'Infrastructure-Plan', projectDate: '01/03/2024', projectDescription: 'Pending for approval'},
  ]; */

  openRequestsData: any[]=[];
  recentProjectsData1: any[]=[];
  dynamicProjectName: string = '';
/*   recentProjectsData1: any[]=[];
 */
  constructor(private openRequestsService: OpenRequestsService, private storage: LocalStorageService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fetchOpenRequests();

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.dynamicProjectName = params.get('projectName') || '';
    });

/*     this.route.queryParamMap.subscribe((params: ParamMap) => {
      const projectName = params.get('projectName');
      console.log('Project Name:', projectName);
    }); */

/*     this.fetchRecentProjects();
 */  }

  /* fetchOpenRequests(): void{
    this.openRequestsService.getOpenRequests()
    .subscribe(
      (data: openRequestsData[]) => {
        this.openRequestsData=data;
      },
      (error) => {
        console.error('Error fetching open requests:', error)
      }
    );
  } */

/*   fetchRecentProjects(): void{
    this.openRequestsService.getRecentProjects().subscribe({
      next: (response: any[]) => {
        this.recentProjectsData1 = response;
      },
      error: (error) => {
        console.error('Error fetching open requests:', error);
      },
      complete: () =>{
        console.log('Request completed');
      }
    })
  } */


  viewProjectDetails(projectName: string): void {
    const queryParams = { load: 'CP', projectName: projectName };
    this.router.navigate(['/project-details'],{ queryParams:queryParams });
  }



  fetchOpenRequests(): void{
    const userId = this.storage.userid.toString();
    this.openRequestsService.getRecentProjects('1').subscribe({
      next: (response: any[]) => {
        this.recentProjectsData1 = response;
      },
      error: (error) => {
        console.error('Error fetching open requests:', error);
      },
      complete: () =>{
        console.log('Request completed');
      }
    })

    this.openRequestsService.getOpenRequests('1').subscribe({
      next: (response: any[]) => {
        this.openRequestsData = response.filter(request => request.state === 'Rejected');
      },
      error: (error) => {
        console.error('Error fetching open requests:', error);
      },
      complete: () =>{
        console.log('Request completed');
      }
    })


  }
}
