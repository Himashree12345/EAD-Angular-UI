import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

  constructor(private router: Router){}

  leftCards = [
    { title: 'Project', targetComponentLink: 'master-project' },
    { title: 'Role', targetComponentLink: 'master-roles' },
    { title: 'Platform Resource', targetComponentLink: 'master-platform-resource' },
    { title: 'Platforms', targetComponentLink: 'master-platforms' },
    { title: 'Tool Versions', targetComponentLink: 'master-tool-versions'},
  ]
  rightCards = [
    { title: 'Users', targetComponentLink: 'master-users' },
    { title: 'Platform Service Data', targetComponentLink: 'master-platform-service-data' },
    { title: 'Exemptions', targetComponentLink: 'master-exemptions' },
    { title: 'Tools', targetComponentLink: 'master-tools' },
  ];

  navigateTo(componentLink: string){
    this.router.navigate([`master/${componentLink}`]);
  }
}
