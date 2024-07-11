import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.scss'
})
export class RecentProjectsComponent implements OnInit {
      projects: any[];

      projectList: any[] = [
        {
            ProjectId: 1,
            ProjectName: "Project A",
            TotalEntities: 1,
            CompletedEntities: 2,
            InProgressEntities: 5,
            OnHoldEntities: 1,
            NewEntities: 2
        },
        {
            ProjectId: 2,
            ProjectName: "Project B",
            TotalEntities: 2,
            CompletedEntities: 1,
            InProgressEntities: 5,
            OnHoldEntities: 2,
            NewEntities: 3
        },
        {
            ProjectId: 3,
            ProjectName: "Project C",
            TotalEntities: 1,
            CompletedEntities: 8,
            InProgressEntities: 4,
            OnHoldEntities: 1,
            NewEntities: 1
        },
      {
          ProjectId: 4,
          ProjectName: "Project D",
          TotalEntities: 2,
          CompletedEntities: 1,
          InProgressEntities: 8,
          OnHoldEntities: 1,
          NewEntities: 1
      },
      {
          ProjectId: 5,
          ProjectName: "Project E",
          TotalEntities: 8,
          CompletedEntities: 1,
          InProgressEntities: 6,
          OnHoldEntities: 5,
          NewEntities: 5
      }
      
    ];

    ngOnInit(){
      this.projectList;
    }

}
