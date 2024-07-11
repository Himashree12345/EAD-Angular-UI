import { Component } from '@angular/core';
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

interface Widget{
  name: string;
}

@Component({
  selector: 'app-screen-analysis',
  templateUrl: './screen-analysis.component.html',
  styleUrl: './screen-analysis.component.scss'
})


export class ScreenAnalysisComponent {

  cards = [
    {
      title: 'card1',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card2',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card3',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card4',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card5',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card1',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card2',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card3',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card4',
      number: 50,
      description: 'Commits this month'
    },
    {
      title: 'card5',
      number: 50,
      description: 'Commits this month'
    },
  ];

  widgets: Widget[] = [
    { name: 'Widget 1' },
    { name: 'Widget 2' },
    { name: 'Widget 3' }
  ];


  selectedCalendar: string = '';
  selectCalendar(calendar: string) {
    this.selectedCalendar = calendar;
  }

  selectedOption: string = '';
  isDropdownOpen: boolean = false;
  searchTerm: string = '';
  selectedWidget: Widget | null = null;
  usageMinutes: number = 500;

  constructor() { }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectWidget(widget: Widget) {
    console.log('Selected Widget:', widget);
    this.selectedWidget = widget;
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (!this.isDropdownOpen) {
      this.searchTerm = '';
      this.selectedWidget = null;
    }
  }

  getFilteredWidgets(): Widget[] {
    if (!this.searchTerm.trim()) {
      return this.widgets;
    }
    const filteredWidgets = this.widgets.filter(widget =>
      widget.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (filteredWidgets.length === 0) {
      return [{ name: 'No results found' }];
    }
    return filteredWidgets;
  }
}
