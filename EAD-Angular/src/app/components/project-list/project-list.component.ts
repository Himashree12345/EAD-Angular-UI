import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  length: number = 0;
  selectedRow: ProjectData | null = null;
  displayedColumns: string[] = ['projectTitle', 'id', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<ProjectData>([
    { projectTitle: 'Project A', id: 1, startDate: '2022-01-01', endDate: '2022-02-01' },
    { projectTitle: 'Project B', id: 2, startDate: '2022-02-01', endDate: '2022-03-01' },
    { projectTitle: 'Project C', id: 3, startDate: '2022-03-01', endDate: '2022-04-01' },
    { projectTitle: 'Project D', id: 4, startDate: '2022-04-01', endDate: '2022-05-01' },
    { projectTitle: 'Project E', id: 5, startDate: '2022-05-01', endDate: '2022-06-01' },
    { projectTitle: 'Project F', id: 1, startDate: '2022-01-01', endDate: '2022-02-01' },
    { projectTitle: 'Project G', id: 2, startDate: '2022-02-01', endDate: '2022-03-01' },
    { projectTitle: 'Project H', id: 3, startDate: '2022-03-01', endDate: '2022-04-01' },
    { projectTitle: 'Project I', id: 4, startDate: '2022-04-01', endDate: '2022-05-01' },
    { projectTitle: 'Project J', id: 5, startDate: '2022-05-01', endDate: '2022-06-01' },
    { projectTitle: 'Project K', id: 1, startDate: '2022-01-01', endDate: '2022-02-01' },
    { projectTitle: 'Project L', id: 2, startDate: '2022-02-01', endDate: '2022-03-01' },
    { projectTitle: 'Project M', id: 3, startDate: '2022-03-01', endDate: '2022-04-01' },
    { projectTitle: 'Project N', id: 4, startDate: '2022-04-01', endDate: '2022-05-01' },
    { projectTitle: 'Project O', id: 5, startDate: '2022-05-01', endDate: '2022-06-01' }
  ]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRowClicked(row: ProjectData) {
    this.selectedRow = row;
  }

  isSelected(row: ProjectData): boolean {
    return this.selectedRow === row;
  }
}

export interface ProjectData {
  projectTitle: string;
  id: number;
  startDate: string;
  endDate: string;
}