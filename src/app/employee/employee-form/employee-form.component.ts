import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Department } from '../../models/department.interface';
import { Employee } from '../../models/employee.interface';
import { v4 } from 'uuid';
import { EmployeeService } from '../../employee.service';

function forbiddenNameValidator(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const enteredName = control.value;
    return enteredName === forbiddenName
      ? {
        forbiddenName: {
          message: `The name ${forbiddenName} is forbidden`
        },
      }
      : null;
  };
}


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmpoyeeFormComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Marketing' },
  ]


  employeeForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.pattern(/\w{2,}\s\w{2,}/),
      forbiddenNameValidator('Will Smith')
    ]],
    department: [null, Validators.required],
    gender: [null, Validators.required],
    smoking: [false],
    // addressGroup: this.fb.group({
    //   city: ['', Validators.required],
    //   street: ['', Validators.required],
    //   number: [null, [Validators.required, Validators.min(1), Validators.max(999)]]
    // }),
  });

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  get name(): FormControl {
    return this.employeeForm.get('name') as FormControl;
  }

  get department(): FormControl {
    return this.employeeForm.get('department') as FormControl;
  }

  get gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }

  get smoking(): FormControl {
    return this.employeeForm.get('smoking') as FormControl;
  }

  get addressGroup(): FormGroup {
    return  this.employeeForm.get('addressGroup') as FormGroup;
  }

  ngOnInit(): void {
    // this.employeeForm.valueChanges.subscribe((value: Employee) => console.log(value));
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = {
        id: v4(),
        name: this.name.value,
        department: this.department.value,
        gender: this.gender.value,
        smoking: this.smoking.value,
        salary: 0,
      }

      this.employeeService.addEmployee(employee);

      this.employeeForm.reset();
    }
  }

}
