import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AgilePlanComponent } from './components/agile-plan/agile-plan.component';
import { ProvisionComponent } from './components/provision/provision.component';
import { AgilePlanNewComponent } from './components/agile-plan-new/agile-plan-new.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './services/auth.guard';
import { ProjectsComponent } from './components/projects/projects.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SafetyComplianceComponent } from './components/safety-compliance/safety-compliance.component';
import { TestAutomationComponent } from './components/test-automation/test-automation.component';
import { OperationsComponent } from './components/operations/operations.component';
import { ProvisionDetailsComponent } from './components/provision/provision-details.component';
import { ExecuteComponent } from './components/execute/execute.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ScreenAnalysisComponent } from './components/screen-analysis/screen-analysis.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PluginsComponent } from './components/plugins/plugins.component';
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
import { MasterExemptionsComponent } from './components/masterData/master-exemptions/master-exemptions.component';
import { MasterPlatformsComponent } from './components/masterData/master-platforms/master-platforms.component';
import { MasterToolsComponent } from './components/masterData/master-tools/master-tools.component';
import { MasterToolVersionsComponent } from './components/masterData/master-tool-versions/master-tool-versions.component';
import { UserProjectMappingComponent } from './components/masterData/user-project-mapping/user-project-mapping.component';
import { UserRoleMappingComponent } from './components/masterData/user-role-mapping/user-role-mapping.component';
import { ToolProjectMappingComponent } from './components/masterData/tool-project-mapping/tool-project-mapping.component';
import { ProjectStatsComponent } from './components/project-stats/project-stats.component';
import { ToolsComponent } from './components/tools/tools.component';



const routes: Routes = [
  {
    path:'',component:ProjectsComponent, canActivate : [authGuard]
  },
  {
    path : 'login', component : LoginComponent
  },
  {
  path: 'home',component : HomeComponentComponent, canActivate : [authGuard],
  children : [
    // {
    //   path:'',component : ProjectsComponent, canActivate : [authGuard]
    // },
    {
      path : 'agile-plan-new', component : AgilePlanNewComponent, canActivate : [authGuard]
    },
    {
      path : 'security-compliance', component : SafetyComplianceComponent, canActivate : [authGuard]
    },
    {
      path : 'test-automation', component : TestAutomationComponent, canActivate : [authGuard]
    },
    {
      path : 'operations', component : OperationsComponent, canActivate : [authGuard]
    },
    {
      path : 'execute', component : ExecuteComponent, canActivate : [authGuard]
    },
    {
      path: 'screen-analysis', component : ScreenAnalysisComponent, canActivate : [authGuard]
    },
    {
      path: 'tools', component : ToolsComponent, canActivate : [authGuard]
    }

  ]
  },

  {
    path : 'infra', component : InfrastructureComponent, canActivate : [authGuard]
  },
  {
    path : 'project-details', component : ProjectDetailsComponent, canActivate : [authGuard]
  },
  {
    path : 'map-view', component : AgilePlanComponent,  canActivate : [authGuard]
  },

  {
    path : 'provision', canActivate : [authGuard],
    children : [
      {
        path : '', component : ProvisionComponent, canActivate : [authGuard]
      },
      {
        path : 'details/:crNumber', component : ProvisionDetailsComponent, canActivate : [authGuard]
      },
    ]
  },
  {
    path: 'project-stats', component: ProjectStatsComponent, canActivate: [authGuard]
  },
  {
    path: 'master', canActivate: [authGuard],
    children:[
      {
        path: '', component: MasterComponent, canActivate: [authGuard]
      },
      {
        path: 'master-project', component: MasterProjectComponent, canActivate: [authGuard]
      },
      {
        path: 'master-users', component: MasterUsersComponent, canActivate: [authGuard],
      },
      {
        path: 'user-project-mapping', component: UserProjectMappingComponent, canActivate: [authGuard]
      },
      {
        path: 'user-role-mapping', component: UserRoleMappingComponent, canActivate: [authGuard]
      },
      {
        path: 'master-roles', component: MasterRolesComponent, canActivate: [authGuard]
      },
      {
        path: 'master-platform-service-data', component: MasterPlatformServiceDataComponent, canActivate: [authGuard]
      },
      {
        path: 'master-platform-resource', component: MasterPlatformResourceComponent, canActivate:[authGuard]
      },
      {
        path: 'master-exemptions', component: MasterExemptionsComponent, canActivate: [authGuard]
      },
      {
        path: 'master-platforms', component: MasterPlatformsComponent, canActivate: [authGuard]
      },
      {
        path: 'master-tools', component: MasterToolsComponent, canActivate: [authGuard]
      },
      {
        path: 'tool-project-mapping', component: ToolProjectMappingComponent, canActivate: [authGuard]
      },
      {
        path: 'master-tool-versions', component: MasterToolVersionsComponent, canActivate: [authGuard]
      },
      

    ]
  },
  {
    path : 'settings', component: SettingsComponent, canActivate : [authGuard]
  },
  {
    path : 'notification', component : NotificationsComponent, canActivate : [authGuard]
  },
  {
    path: 'overview', component: OverviewComponent, canActivate: [authGuard]
  },
  {
    path: 'plugins', component: PluginsComponent, canActivate: [authGuard],
  },
  {
    path: 'plugin-details/:id', component: PluginDetailsComponent, canActivate: [authGuard]
  },
  {
    path : 'home-page', component : HomePageComponentComponent, canActivate : [authGuard]
  },
  {
    path : 'execute' , component : ExecuteComponent , canActivate : [authGuard]
    }
    ,
    {
      path: 'side-plugin' , component: SidePluginComponent , canActivate: [authGuard]
    }
    ,

    {
      path: 'side-plugin-create', component: CreateComponent, canActivate: [authGuard]
    }
    ,
    {
      path: 'integration' , component:IntegrationComponent , canActivate:[authGuard]
    }
    ,
  {
    path : '**', redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
