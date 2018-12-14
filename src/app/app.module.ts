import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LicensesComponent } from './dashboard/licenses/licenses.component';
import { UsersComponent } from './dashboard/users/users.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasicComponent } from './dashboard/licenses/basic/basic.component';
import { StandardComponent } from './dashboard/licenses/standard/standard.component';
import { AdvancedComponent } from './dashboard/licenses/advanced/advanced.component';
import { EditPlanComponent } from './dashboard/licenses/edit-plan/edit-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LicensesComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent,
    BasicComponent,
    StandardComponent,
    AdvancedComponent,
    EditPlanComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
