import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;

  sideBarOpened : boolean = false;
  shouldRun = true;

  sideMenuItems : any = [
    {
      name : 'Home',
      icon : 'home',
      link : this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'platform engineer') ? 'overview' : this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'developer') ? 'home-page':'',
      active : false
    },
    // {
    //   name : 'Documents',
    //   icon : 'assignment',
    //   link : '#',
    //   active : false
    // },
    {
      name : 'Projects',
      icon : 'assignment',
      active : false,
      submenu : [
        {
          name : 'Infrastructure',
          link : 'infra'
        },
        {
          name : 'CICD',
          link : '/home/agile-plan-new',
          content : 'Tools'
        },
        {
          name : 'Tools',
          link : '/home/agile-plan-new',
          content : 'CICD'
        },
       
        {
          name : 'Security & Compliance',
          link : '/home/security-compliance'
        },
        {
          name : 'Test Automation',
          link : '/home/test-automation'
        },
        {
          name : 'Operations',
          link : '/home/operations'
        }
      ]
    },
    {
      name : 'Provision',
      icon : 'view_list',
      active : false,
      link : 'provision'
    },
    {
      name : 'Execute',
      icon : 'autorenew',
      active : false,
      link : 'execute'   //home/execute
    },
    {
      name : 'Plugins',
      icon: 'extension' ,
      active : false,
      link : 'plugins'
    },
    {
      name : 'Settings',
      icon : 'settings',
      active : false,
      link : 'settings'
    },
    {
      name : 'Notification',
      icon : 'notifications',
      active : false,
      link : 'notification'
    }

  ]


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public service : AuthService, private storage: LocalStorageService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    const devRole= this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'developer')
    if(devRole)
    {
      this.sideMenuItems.push(
        {
          name : 'Integration',
          icon: 'build',
          link : 'integration',
          active : false
        })
    }


    const role = this.storage.roles?.find(role => role.name.toLocaleLowerCase() === 'platform engineer');
    if(role){
      this.sideMenuItems.push({
        name: 'Master',
        icon: 'analytics',
        active: false,
        link: 'master'
      });
    }

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openSideNav(){
    this.sideBarOpened = true;
  }

  closeSideNav(){
    this.sideBarOpened = false;
  }

  sideNavToggle(){
    this.sideBarOpened = !this.sideBarOpened;
    console.log(this.sideBarOpened)
  }

  activateItem(item){
    this.sideMenuItems.forEach(element => {
        if(item.name === element.name){
          element.active = true;
        }else{
          element.active = false;
        }
    });
  }

}
