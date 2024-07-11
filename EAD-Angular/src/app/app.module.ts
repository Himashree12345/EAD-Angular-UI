import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes }   from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgilePlanComponent } from './components/agile-plan/agile-plan.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { ProvisionComponent } from './components/provision/provision.component';
import { AgilePlanNewComponent } from './components/agile-plan-new/agile-plan-new.component';
import { AccordianDropdownComponent } from './components/accordian-dropdown/accordian-dropdown.component';
import { CardListComponent } from './components/card-list/card-list.component';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LogoutComponent } from './components/logout/logout.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SafetyComplianceComponent } from './components/safety-compliance/safety-compliance.component';
import { TestAutomationComponent } from './components/test-automation/test-automation.component';
import { OperationsComponent } from './components/operations/operations.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SettingsComponent } from './components/settings/settings.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { authInterceptor } from './helpers/auth.interceptor';
import { ProjectCardComponent } from './components/projects/project-card.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProvisionDetailsComponent } from './components/provision/provision-details.component';
import { BreadcumComponent } from './components/breadcum/breadcum.component';
import { ExecuteComponent } from './components/execute/execute.component';
import { MatProgressBarModule } from '@angular/material/progress-bar' ;
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ScreenAnalysisComponent } from './components/screen-analysis/screen-analysis.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { PluginDetailsComponent } from './components/plugins/plugin-details.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { SidePluginComponent } from './components/side-plugin/side-plugin.component';
import { CreateComponent } from './components/side-plugin/create.component';
import { IntegrationComponent } from './components/integration/integration.component';
import { MasterComponent } from './components/masterData/master/master.component';
import { MasterProjectComponent } from './components/masterData/master-project/master-project.component';
import { MasterUsersComponent } from './components/masterData/master-users/master-users.component';
import { MasterRolesComponent } from './components/masterData/master-roles/master-roles.component';
import { MasterPlatformServiceDataComponent } from './components/masterData/master-platform-service-data/master-platform-service-data.component';
import { MasterPlatformResourceComponent } from './components/masterData/master-platform-resource/master-platform-resource.component';
import { MasterToolsComponent } from './components/masterData/master-tools/master-tools.component';
import { MasterPlatformsComponent } from './components/masterData/master-platforms/master-platforms.component';
import { MasterExemptionsComponent } from './components/masterData/master-exemptions/master-exemptions.component';
import { MasterToolVersionsComponent } from './components/masterData/master-tool-versions/master-tool-versions.component';
import { UserProjectMappingComponent } from './components/masterData/user-project-mapping/user-project-mapping.component';
import { UserRoleMappingComponent } from './components/masterData/user-role-mapping/user-role-mapping.component';
import { ToolProjectMappingComponent } from './components/masterData/tool-project-mapping/tool-project-mapping.component';
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ToolsComponent } from './components/tools/tools.component';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    HomeComponentComponent,
    AgilePlanComponent,
    CardComponent,
    CardDialogComponent,
    ProvisionComponent,
    AgilePlanNewComponent,
    AccordianDropdownComponent,
    CardListComponent,
    LoginComponent,
    ProjectsComponent,
    LogoutComponent,
    InfrastructureComponent,
    SafetyComplianceComponent,
    TestAutomationComponent,
    OperationsComponent,
    NotificationsComponent,
    SettingsComponent,
    ProjectCardComponent,
    ProvisionDetailsComponent,
    BreadcumComponent,
    ExecuteComponent,
    ProjectDetailsComponent,
    ScreenAnalysisComponent,
    ProjectDetailsComponent,
    OverviewComponent,
    PluginsComponent,
    RecentProjectsComponent,
    HomePageComponentComponent,
    PluginDetailsComponent,
    SidePluginComponent,
    CreateComponent,
    IntegrationComponent,
    MasterComponent,
    MasterProjectComponent,
    MasterUsersComponent,
    MasterRolesComponent,
    MasterPlatformServiceDataComponent,
    MasterPlatformResourceComponent,
    MasterToolsComponent,
    MasterPlatformsComponent,
    MasterExemptionsComponent,
    MasterToolVersionsComponent,
    UserProjectMappingComponent,
    UserRoleMappingComponent,
    ToolProjectMappingComponent,
    ProjectStatsComponent,
    ProjectListComponent,
    ToolProjectMappingComponent,
    ToolsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutServerModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,MatMenuModule,MatExpansionModule,MatTooltipModule,
    FlexLayoutModule,
    MatCardModule,
    MatRippleModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressBarModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors(
      [authInterceptor]
  ))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
