import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(catId: any): any {
    if (catId === 1) { return 'Ragadozó emlős' }
    else if (catId === 2) { return 'Növényevő emlős' }
    else if (catId === 3) { return 'Vizi élőlény' }
    else if (catId === 4) { return 'Madár' }
    else if (catId === 5) { return 'Ízeltlábú' }
    else if (catId === 6) { return 'Hüllő vagy Kétéltű' };
  }

}
