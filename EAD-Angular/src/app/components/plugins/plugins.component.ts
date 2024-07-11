import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrl: './plugins.component.scss'
})
export class PluginsComponent implements OnInit{
create() {
  this.router.navigate(['/side-plugin-create']);
}


@Input() isPluginsPage: boolean = true;
@Input() isSelect: boolean = false;
plugin: any;
pluginList: any[];

constructor(private router: Router) {}

displayedColumns: string[] = ['pluginName', 'ci', 'cd', 'cloud', 'actions']

data = [
  {
    "pluginId": 1,
    "pluginName": "Plugin A",
    "CI": [
      {
        "category": "CI",
        "image": "assets/png/Microsoft-Azure-DevOps.png",
        "service": "Azure DevOps",
        "version": "1.1",
        "shared": 0
      },
      {
        "category": "Version Control",
        "image": "assets/png/Github.png",
        "service": "GitHub",
        "version": "1.1",
        "shared": 0
      }
    ],
    "CD": [
      {
        "category": "CD",
        "image": "assets/png/Jenkins.png",
        "service": "Jenkins",
        "version": "1.1",
        "shared": 0
      }
    ],
    "cloud": [
      {
        "category": "Cloud Platform",
        "image": "assets/png/AWS.png",
        "service": "AWS",
        "version": "1.1",
        "shared": 0
      }
    ]
  },
  {
    "pluginId": 2,
    "pluginName": "Plugin B",
    "CI": [
      {
        "category": "CI",
        "image": "assets/png/Microsoft-Azure-DevOps.png",
        "service": "Azure DevOps",
        "version": "1.1",
        "shared": 0
      },
      {
        "category": "Version Control",
        "image": "assets/png/Github.png",
        "service": "GitHub",
        "version": "1.1",
        "shared": 0
      }
    ],
    "CD": [
      {
        "category": "CD",
        "image": "assets/png/Jenkins.png",
        "service": "Jenkins",
        "version": "1.1",
        "shared": 0
      }
    ],
    "cloud": [
      {
        "category": "Cloud Platform",
        "image": "assets/png/AWS.png",
        "service": "AWS",
        "version": "1.1",
        "shared": 0
      }
    ]
  },
  {
    "pluginId": 4,
    "pluginName": "Plugin C",
    "CI": [
      {
        "category": "CI",
        "image": "assets/png/Microsoft-Azure-DevOps.png",
        "service": "Azure DevOps",
        "version": "1.1",
        "shared": 0
      },
      {
        "category": "Version Control",
        "image": "assets/png/Github.png",
        "service": "GitHub",
        "version": "1.1",
        "shared": 0
      }
    ],
    "CD": [
      {
        "category": "CD",
        "image": "assets/png/Jenkins.png",
        "service": "Jenkins",
        "version": "1.1",
        "shared": 0
      }
    ],
    "cloud": [
      {
        "category": "Cloud Platform",
        "image": "assets/png/AWS.png",
        "service": "AWS",
        "version": "1.1",
        "shared": 0
      }
    ]
  },
  {
    "pluginId": 5,
    "pluginName": "Plugin A",
    "CI": [
      {
        "category": "CI",
        "image": "assets/png/Microsoft-Azure-DevOps.png",
        "service": "Azure DevOps",
        "version": "1.1",
        "shared": 0
      },
      {
        "category": "Version Control",
        "image": "assets/png/Github.png",
        "service": "GitHub",
        "version": "1.1",
        "shared": 0
      }
    ],
    "CD": [
      {
        "category": "CD",
        "image": "assets/png/Jenkins.png",
        "service": "Jenkins",
        "version": "1.1",
        "shared": 0
      }
    ],
    "cloud": [
      {
        "category": "Cloud Platform",
        "image": "assets/png/AWS.png",
        "service": "AWS",
        "version": "1.1",
        "shared": 0
      }
    ]
  },
  
];

ngOnInit(){
  // this.pluginService.getPlugins().subscribe(data=>{
  //   this.pluginList = data;
  // });
  this.pluginList = this.data;
}


viewDetails(id: number){ 
  this.router.navigate(['/plugin-details', id]);
  }
  
}
