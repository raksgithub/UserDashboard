import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { LicensesComponent } from './dashboard/licenses/licenses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicComponent } from './dashboard/licenses/basic/basic.component';
import { StandardComponent } from './dashboard/licenses/standard/standard.component';
import { AdvancedComponent } from './dashboard/licenses/advanced/advanced.component';
import { EditPlanComponent } from './dashboard/licenses/edit-plan/edit-plan.component';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { 
        path: 'users', 
        component: UsersComponent 
      },
      { 
        path: 'licenses', 
        component: LicensesComponent,
        children: [
          {
            path: 'basic',
            component: BasicComponent,
          }, 
          {
            path: 'standard',
            component: StandardComponent
          }, 
          {
            path: 'advanced',
            component: AdvancedComponent
          }, 
          {
            path: ':type/edit/:id',
            component: EditPlanComponent
          }
        ]
      }
    ] 
  }, 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
