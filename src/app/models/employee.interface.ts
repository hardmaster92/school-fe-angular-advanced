import { Department } from "./department.interface";

export interface Employee {
  id: string;
  name: string;
  department: Department,
  gender: 'male' | 'female';
  smoking: boolean;
  salary: number;
}
