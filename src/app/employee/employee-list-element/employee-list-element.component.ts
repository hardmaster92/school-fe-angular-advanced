import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.interface';

@Component({
  selector: 'app-employee-list-element',
  templateUrl: './employee-list-element.component.html',
  styleUrls: ['./employee-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListElementComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() employeDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(id: string): void {
    this.employeDelete.emit(id);
  }

}
