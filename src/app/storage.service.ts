import { Injectable } from '@angular/core';
import { Employee } from './models/employee.interface';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  getItem<T>(key: string): T | null {
    const storedItem = window.localStorage.getItem(key);

    if (storedItem) {
      try {
        return JSON.parse(storedItem) as T;
      } catch(e) {
        return null;
      }
    }

    return null;
  }

  setItem(key: string, item: unknown): void {
    window.localStorage.setItem(key, JSON.stringify(item));
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }


}
