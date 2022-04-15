import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpoyeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListElementComponent } from './employee-list-element/employee-list-element.component';
import { FibonacciPipe } from '../fibonacci.pipe';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmpoyeeFormComponent,
    EmployeeListElementComponent,
    FibonacciPipe,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
})
export class EmployeeModule { }
