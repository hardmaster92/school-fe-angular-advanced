import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from './models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class TestResolver implements Resolve<Employee[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    const emp: Employee = {
      id: 'sadsad',
      name: 'asdsadsa',
      gender: 'female',
      department: { id: 1, name: ''},
      salary: 4,
      smoking: false,
    }
    return of([emp]);
  }
}
