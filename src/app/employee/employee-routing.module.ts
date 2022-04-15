import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestResolver } from '../test.resolver';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpoyeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent,
    resolve: {
      employees: TestResolver,
    }
  },
  {
    path: 'create',
    component: EmpoyeeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
