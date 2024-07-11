import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  userProfile : any;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private auth:AuthService){
    this.matIconRegistry.addSvgIcon(
      "manage-account",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/profile.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logout",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/logout.svg")
    );
  }

  ngOnInit(){
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
    }

  logout(){
    this.auth.logout();
  }

  getUserDetails(){
    return this.auth.getUserProfile();
  }

}
