import { ClassloggerService, BusyIndicatorModule, DynamicTabsModule, ExtModule, ObjectHistoryModule, DataTreeModule, CdrModule, LdsReplaceModule, DataSourceToolbarModule, HelpContextualModule, DataTableModule, MenuService, RouteGuardService, SideNavigationViewModule } from 'qbm';
import { ApplicationGuardService } from '../guards/application-guard.service';
import { EmployeeAdministrationComponent } from './employee-administration.component';
import { Router, Routes } from '@angular/router';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ObjectHyperviewModule } from '../object-hyperview/object-hyperview.module';
import { RequestHistoryModule } from '../request-history/request-history.module';
import { RiskModule } from '../risk/risk.module';
import { OrgChartModule } from '../org-chart/org-chart.module';
import { MatMenuModule } from '@angular/material/menu';


const routes: Routes = [
    {
      path: 'employeeadministration',
      component: EmployeeAdministrationComponent,
      canActivate: [RouteGuardService, ApplicationGuardService],
      resolve: [RouteGuardService],
    },
  ];
  
  @NgModule({
    declarations: [EmployeeAdministrationComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EuiCoreModule,
        EuiMaterialModule,
        CdrModule,
        MatTooltipModule,
        MatExpansionModule,
        MatIconModule,
        MatSidenavModule,
        TranslateModule,
        DataSourceToolbarModule,
        DataTableModule,
        LdsReplaceModule,
        DataTreeModule,
        ObjectHistoryModule,
        ObjectHyperviewModule,
        RequestHistoryModule,
        ExtModule,
        RiskModule,
        DynamicTabsModule,
        OrgChartModule,
        BusyIndicatorModule,
        MatCardModule,
        // IdentityRoleMembershipsModule,
        MatMenuModule,
        HelpContextualModule
    ],
    // providers: [MyResponsibilitiesRegistryService],
  })
  export class EmployeeAdministrationModule {
    constructor(readonly router: Router, private readonly menuService: MenuService, logger: ClassloggerService) {
      const config = router.config;
      routes.forEach((route) => {
        config.splice(config.length - 1, 0, route);
      });
      this.router.resetConfig(config);
      logger.info(this, '▶️ EmployeeAdministrationModule loaded');
      this.setupMenu();
    }
    
    private setupMenu(): void {
      this.menuService.addMenuFactories((preProps: string[], features: string[]) => ({
        id: 'ROOT_EmployeeAdministration',
        title: '#LDS#Employee Administration',
        sorting: '80',
        route: routes[0].path,
      }));
    }
  }
  