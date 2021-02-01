import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endangered'
})
export class EndangeredPipe implements PipeTransform {

  transform(value: boolean, result: string = 'Endangered'): any {
    if (value === true) { return result }
    else if (value == false) { return `Not ${result.toLowerCase()}` };
  }

}
