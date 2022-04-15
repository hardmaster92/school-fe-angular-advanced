import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacci',
  pure: true,
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number): unknown {
    return this.fibonacci(value);
  }

  private fibonacci(n: number): number {
    if (n === 1 || n === 2) {
      return 1;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

}
